export const Checkmark = () =>{
    return (
        <svg className="checkmark"
             viewBox="0 0 52 52">
            <circle className="checkmark__cirlec"
                    cx="26"
                    cy="26"
                    r="25"
                    fill="none" />
            <path className="checkmark__check"
                  fill="none"
                  d="M14.1 27.217.1 7.2 16.7-16.8" />
        </svg>
    );
}