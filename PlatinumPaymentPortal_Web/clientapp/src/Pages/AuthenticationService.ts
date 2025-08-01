interface LoginRequest {
  email: string;
  password: string;
}

class AuthenticationService {
  public async login(req: LoginRequest) {
    const result = await fetch("https://localhost:7290/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(req),
      credentials: "include",
    });

    if (!result.ok) {
      const error = await result.json().catch(() => ({}));
      throw new Error(error?.message || "Login Failed");
    }

    return await result.json();
  }
}

export const authService = new AuthenticationService();
