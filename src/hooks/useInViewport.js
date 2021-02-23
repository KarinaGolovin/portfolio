import {useEffect, useState} from "react";

export const useInViewport = ({ref}) => {
    const [isInsideViewport, setIsInsideViewport] = useState(true);
    useEffect(() => {
        const cachedEl = ref.current;

        let observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if(entry.intersectionRatio > 0){
                    setIsInsideViewport(true)
                } else {
                    setIsInsideViewport(false)
                }

            });
        }, {threshold: [0, 1]});

        observer.observe(cachedEl);

        return () => {
            observer.disconnect()
        }
    }, []);

    return isInsideViewport;
}