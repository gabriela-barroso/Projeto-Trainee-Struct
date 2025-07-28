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



export function EmailIcon({ className }: { className?: string }) {
    return (
        <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        >
        <path
            d="M16.6667 3.33334H3.33341C2.41294 3.33334 1.66675 4.07954 1.66675 5.00001V15C1.66675 15.9205 2.41294 16.6667 3.33341 16.6667H16.6667C17.5872 16.6667 18.3334 15.9205 18.3334 15V5.00001C18.3334 4.07954 17.5872 3.33334 16.6667 3.33334Z"
            stroke="currentColor"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M18.3334 5.83334L10.8584 10.5833C10.6011 10.7445 10.3037 10.83 10.0001 10.83C9.69648 10.83 9.39902 10.7445 9.14175 10.5833L1.66675 5.83334"
            stroke="currentColor"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        </svg>
    );
}



export function PasswordIcon({ className }: { className?: string }) {
    return (
        <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        >
        <path
            d="M15.8333 9.16666H4.16667C3.24619 9.16666 2.5 9.91285 2.5 10.8333V16.6667C2.5 17.5871 3.24619 18.3333 4.16667 18.3333H15.8333C16.7538 18.3333 17.5 17.5871 17.5 16.6667V10.8333C17.5 9.91285 16.7538 9.16666 15.8333 9.16666Z"
            stroke="currentColor"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M5.83325 9.16666V5.83332C5.83325 4.72825 6.27224 3.66845 7.05364 2.88704C7.83504 2.10564 8.89485 1.66666 9.99992 1.66666C11.105 1.66666 12.1648 2.10564 12.9462 2.88704C13.7276 3.66845 14.1666 4.72825 14.1666 5.83332V9.16666"
            stroke="currentColor"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        </svg>
    );
}



export function GoogleIcon({ className }: { className?: string }) {
  return (
    <svg
      width="28"
      height="17"
      viewBox="0 0 28 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath="url(#clip0)">
        <path
          d="M15.04 8.66669C15.04 8.14669 14.9933 7.64669 14.9067 7.16669H8V10.0067H11.9467C11.7733 10.92 11.2533 11.6934 10.4733 12.2134V14.06H12.8533C14.24 12.78 15.04 10.9 15.04 8.66669Z"
          fill="#4285F4"
        />
        <path
          d="M8.00004 15.8334C9.98004 15.8334 11.64 15.18 12.8534 14.06L10.4734 12.2134C9.82004 12.6534 8.9867 12.92 8.00004 12.92C6.09337 12.92 4.47337 11.6334 3.89337 9.90002H1.45337V11.7934C2.66004 14.1867 5.13337 15.8334 8.00004 15.8334Z"
          fill="#34A853"
        />
        <path
          d="M3.89341 9.89332C3.74675 9.45332 3.66008 8.98665 3.66008 8.49998C3.66008 8.01332 3.74675 7.54665 3.89341 7.10665V5.21332H1.45341C0.953415 6.19998 0.666748 7.31332 0.666748 8.49998C0.666748 9.68665 0.953415 10.8 1.45341 11.7867L3.35342 10.3067L3.89341 9.89332Z"
          fill="#FBBC05"
        />
        <path
          d="M8.00004 4.08669C9.08004 4.08669 10.04 4.46002 10.8067 5.18002L12.9067 3.08002C11.6334 1.89335 9.98004 1.16669 8.00004 1.16669C5.13337 1.16669 2.66004 2.81335 1.45337 5.21335L3.89337 7.10669C4.47337 5.37335 6.09337 4.08669 8.00004 4.08669Z"
          fill="#EA4335"
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="16" height="16" fill="white" transform="translate(0 0.5)" />
        </clipPath>
      </defs>
    </svg>
  );
}



export function OpenEyeIcon({ className }: { className?: string }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M1.71835 10.29C1.6489 10.1029 1.6489 9.89709 1.71835 9.71C2.39476 8.06987 3.54294 6.66753 5.01732 5.68074C6.4917 4.69396 8.22588 4.16718 10 4.16718C11.7741 4.16718 13.5083 4.69396 14.9827 5.68074C16.4571 6.66753 17.6053 8.06987 18.2817 9.71C18.3511 9.89709 18.3511 10.1029 18.2817 10.29C17.6053 11.9301 16.4571 13.3325 14.9827 14.3192C13.5083 15.306 11.7741 15.8328 10 15.8328C8.22588 15.8328 6.4917 15.306 5.01732 14.3192C3.54294 13.3325 2.39476 11.9301 1.71835 10.29Z"
        stroke="currentColor"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z"
        stroke="currentColor"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}



export function ClosedEyeIcon({ className }: { className?: string }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g transform="scale(0.8333)"> {/* Ajusta o conteúdo de 24x24 para 20x20 */}
        <path
          d="M15 18l-.722-3.25"
          stroke="currentColor"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2 8a10.645 10.645 0 0 0 20 0"
          stroke="currentColor"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20 15l-1.726-2.05"
          stroke="currentColor"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4 15l1.726-2.05"
          stroke="currentColor"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9 18l.722-3.25"
          stroke="currentColor"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}



export function NotFound({ className } : { className?: string }) {
  return(
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="m13.5 8.5-5 5"/>
      <path d="m8.5 8.5 5 5"/>
      <circle cx="11" cy="11" r="8"/>
      <path d="m21 21-4.3-4.3"/>
    </svg>
  );
}



export function EditIcon({ className } : { className? : string }) {
  return(
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/>
      <path d="m15 5 4 4"/>
    </svg>
  );
}



export function XIcon({ className } : { className? : string }) {
  return(
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M18 6 6 18"/>
      <path d="m6 6 12 12"/>
    </svg>
  );
}