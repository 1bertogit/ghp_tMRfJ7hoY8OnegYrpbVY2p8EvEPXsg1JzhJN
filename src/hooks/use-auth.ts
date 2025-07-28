
'use client';

// This is a mock auth hook. 
// In a real application, this would be connected to your authentication provider.
// You can toggle the role between 'admin' and 'student' to see the RBAC in action.

type User = {
    name: string;
    role: 'admin' | 'student';
};

export const useAuth = () => {
    // MOCK DATA: Change the role to 'student' to see the admin panel link disappear.
    const user: User = {
        name: 'Dr. Robério',
        role: 'admin', 
    };

    const isLoading = false;

    return { user, isLoading };
};
