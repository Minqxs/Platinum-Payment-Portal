interface LoginRequest {
    email: string;
    password: string;
}

class AuthenticationService {
    public async login(req: LoginRequest) {
        const result = await fetch("/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(req),
        });

        if (!result.ok) {
            const error = await result.json().catch(() => ({}));
            throw new Error(error?.message || "Login Failed");
        }

        return await result.json();
    }
}

export const authService = new AuthenticationService();
