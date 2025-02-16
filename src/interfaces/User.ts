
export interface User {
    gender: string;
    name: {
        first: string;
        last: string;
    };
    email: string;
    dob: {
        age: number;
    };
    picture: {
        large: string;
        medium: string;
        small: string;
    };
}