export function UserIcon({ className = "w-6 h-6" } : { className?: string }) {
    return (
        <svg
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 18 18"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.575}
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M14.25 15.75V14.25C14.25 13.4544 13.9339 12.6913 13.3713 12.1287C12.8087 11.5661 12.0456 11.25 11.25 11.25H6.75C5.95435 11.25 5.19129 11.5661 4.62868 12.1287C4.06607 12.6913 3.75 13.4544 3.75 14.25V15.75" />
            <path d="M9 8.24982C10.6569 8.24982 12 6.90667 12 5.24982C12 3.59296 10.6569 2.24982 9 2.24982C7.34315 2.24982 6 3.59296 6 5.24982C6 6.90667 7.34315 8.24982 9 8.24982Z" />
        </svg>
    );
}



export function CartIcon({ className = "w-6 h-6" } : { className?: string }) {
    return (
        <svg
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 18 18"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.575}
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M6 16.5C6.41421 16.5 6.75 16.1642 6.75 15.75C6.75 15.3358 6.41421 15 6 15C5.58579 15 5.25 15.3358 5.25 15.75C5.25 16.1642 5.58579 16.5 6 16.5Z" />
            <path d="M14.25 16.5C14.6642 16.5 15 16.1642 15 15.75C15 15.3358 14.6642 15 14.25 15C13.8358 15 13.5 15.3358 13.5 15.75C13.5 16.1642 13.8358 16.5 14.25 16.5Z" />
            <path d="M1.5376 1.53738H3.0376L5.0326 10.8524C5.10578 11.1935 5.2956 11.4985 5.56938 11.7148C5.84316 11.9311 6.18378 12.0451 6.5326 12.0374H13.8676C14.209 12.0368 14.54 11.9199 14.8059 11.7058C15.0718 11.4917 15.2567 11.1933 15.3301 10.8599L16.5676 5.28738H3.8401" />
        </svg>
    );
} 


export function SearchIcon({ className = "w-6 h-6" } : { className?: string }) {
    return (
        <svg
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 21"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.66667}
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M9.16667 16.3333C12.8486 16.3333 15.8333 13.3486 15.8333 9.66667C15.8333 5.98477 12.8486 3 9.16667 3C5.48477 3 2.5 5.98477 2.5 9.66667C2.5 13.3486 5.48477 16.3333 9.16667 16.3333Z" />
            <path d="M17.5001 18L13.9167 14.4167" />
        </svg>
    );
}