const USERS_KEY = "incubo_users";
const SESSION_KEY = "incubo_session";

const read = (key, fallback) => {
  try {
    return JSON.parse(localStorage.getItem(key) || JSON.stringify(fallback));
  } catch {
    return fallback;
  }
};

const write = (key, value) => localStorage.setItem(key, JSON.stringify(value));

const getCurrentUser = () => {
  const email = localStorage.getItem(SESSION_KEY);
  return email ? read(USERS_KEY, []).find((user) => user.email === email) : null;
};

const auth = {
  async me() {
    const user = getCurrentUser();
    if (!user) throw Object.assign(new Error("Authentication required"), { status: 401 });
    return { email: user.email };
  },
  async loginViaEmailPassword(email, password) {
    const user = read(USERS_KEY, []).find((candidate) => candidate.email === email && candidate.password === password);
    if (!user) throw new Error("Invalid email or password");
    localStorage.setItem(SESSION_KEY, user.email);
  },
  async register({ email, password }) {
    const users = read(USERS_KEY, []);
    if (users.some((user) => user.email === email)) throw new Error("An account with this email already exists");
    users.push({ email, password });
    write(USERS_KEY, users);
  },
  async verifyOtp(_request) {},
  async resendOtp(_email) {},
  async resetPassword(_request) {},
  loginWithProvider(_provider, _returnTo) {
    throw new Error("Google login is unavailable in local mode");
  },
  setToken(_token) {},
  logout() {
    localStorage.removeItem(SESSION_KEY);
  },
  redirectToLogin(returnTo = "/") {
    window.location.href = `/login?returnTo=${encodeURIComponent(returnTo)}`;
  },
};

const entities = {
  Construction: {
    async list(_sort, _limit) {
      const response = await fetch("/api/constructions");
      if (!response.ok) throw new Error("No se pudieron cargar las obras.");
      return response.json();
    },
    async filter(filters, _sort, _limit) {
      const query = new URLSearchParams(filters).toString();
      const response = await fetch(`/api/constructions?${query}`);
      if (!response.ok) throw new Error("No se pudieron cargar las obras.");
      return response.json();
    },
    async create(form) {
      const response = await fetch("/api/constructions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!response.ok) throw new Error("No se pudo guardar la obra.");
      return response.json();
    },
    async update(id, form) {
      const response = await fetch(`/api/constructions/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!response.ok) throw new Error("No se pudo actualizar la obra.");
    },
    async delete(id) {
      const response = await fetch(`/api/constructions/${id}`, { method: "DELETE" });
      if (!response.ok) throw new Error("No se pudo eliminar la obra.");
    },
  },
};

const UploadPublicFile = async ({ file }) => {
  const formData = new FormData();
  formData.append("file", file);
  const response = await fetch("/api/uploads", { method: "POST", body: formData });
  if (!response.ok) throw new Error("No se pudo subir la imagen.");
  return response.json();
};

export const localClient = {
  app: { getPublicSettings: async () => ({ id: "local", public_settings: {} }) },
  auth,
  entities,
  integrations: { Core: { UploadPublicFile } },
};