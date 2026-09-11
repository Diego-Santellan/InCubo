// Auth simple para el panel de administración (login ultra básico)
const STORAGE_KEY = "incubo_admin_auth";
// Credenciales hardcoded (ultra básico, como pidió el usuario)
const ADMIN_USER = "incubo";
const ADMIN_PASS = "incubo2026";

export function loginAdmin(user, pass) {
  if (user === ADMIN_USER && pass === ADMIN_PASS) {
    sessionStorage.setItem(STORAGE_KEY, "1");
    return true;
  }
  return false;
}

export function logoutAdmin() {
  sessionStorage.removeItem(STORAGE_KEY);
}

export function isAdminAuthed() {
  return sessionStorage.getItem(STORAGE_KEY) === "1";
}