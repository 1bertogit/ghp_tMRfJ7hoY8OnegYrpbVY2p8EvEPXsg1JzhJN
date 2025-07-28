
'use client';

import { useState, useEffect } from 'react';

// This is a mock auth hook. 
// In a real application, this would be connected to your authentication provider.

type User = {
    name: string;
    role: 'admin' | 'student';
};

const defaultStudentUser: User = {
    name: 'Aluno Visionário',
    role: 'student',
};

const defaultAdminUser: User = {
    name: 'Dr. Robério',
    role: 'admin',
};

export const useAuth = () => {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        try {
            const storedUser = sessionStorage.getItem('user');
            if (storedUser) {
                setUser(JSON.parse(storedUser));
            }
        } catch (error) {
            // If sessionStorage is not available or there's an error, do nothing.
            console.warn('Could not retrieve user from sessionStorage');
        } finally {
            setIsLoading(false);
        }
    }, []);

    const login = (userData: User) => {
        try {
            sessionStorage.setItem('user', JSON.stringify(userData));
            setUser(userData);
        } catch (error) {
            console.warn('Could not save user to sessionStorage');
            setUser(userData);
        }
    };

    const logout = () => {
        try {
            sessionStorage.removeItem('user');
        } catch (error) {
             console.warn('Could not remove user from sessionStorage');
        }
        setUser(null);
    };

    return { user, isLoading, login, logout };
};
