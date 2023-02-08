import { useState, useEffect } from "react"; 

const useMediaQuery = (query) => {
    const [matches, setMatches] = useState(false);

    //function to pass a query that will tell us when we are matching the particular breakpoint 
    useEffect(() => {
        const media = window.matchMedia(query);
        if (media.matches !== matches) {
            setMatches(media.matches);
        }
        const listener = () => setMatches(media.matches);
        window.addEventListener("resize", listener);
        return() => window.removeEventListener("resize", listener);
    },
    [matches, query]
    );
    return matches;
}

export default useMediaQuery;