function validateLogin(email, password) {
  if (!email.includes("@")) {
    return { valid: false, message: "Email không hợp lệ" };
  }
  if (password.length < 8) {
    return { valid: false, message: "Mật khẩu tối thiểu 8 ký tự" };
  }
  return { valid: true };
}

module.exports = { validateLogin };