
export function onLogout() {    
    localStorage.removeItem("postId")
    localStorage.removeItem("token");
    alert("Logged out");
    window.location.href = `${window.location.origin}/fed2-js2-ca-AdrianAbusland/auth/login/`;
}
  