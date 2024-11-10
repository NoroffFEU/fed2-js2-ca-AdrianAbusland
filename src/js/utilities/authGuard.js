export function authGuard() {
    if (!localStorage.token) {
      alert("You must be logged in to view this page");
      window.location.href = `${window.location.origin}/fed2-js2-ca-AdrianAbusland/auth/login/`;
    }
  }
