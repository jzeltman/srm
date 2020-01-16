const stickyHeaders = config => {
    console.log('stickyHeaders:', config)

    const observer = new IntersectionObserver((entries, observer) => {
        for (const entry of entries) {
            const entryInfo = entry.boundingClientRect;
            const rootInfo = entry.rootBounds;

// For scrolling down
// console.log(`
// entry Letter:${entry.target.innerText}
// entryInfo.top:${entryInfo.top}
// entryInfo.height:${entryInfo.height}
// entryInfo.height * 1.1:${Math.floor(entryInfo.height * 1.1)}
// rootInfo.top:${rootInfo.top}`,
// '\nentryInfo.top + entryInfo.height',entryInfo.top + entryInfo.height,
// '\nentryInfo.top + Math.ceil(entryInfo.height * 1.1)',entryInfo.top + Math.ceil(entryInfo.height * 1.1),
// '\nentryInfo.top + entryInfo.height >= rootInfo.top',entryInfo.top + entryInfo.height <= rootInfo.top,
// '\nentryInfo.top + Math.ceil(entryInfo.height * 1.1) <= rootInfo.top',entryInfo.top + Math.ceil(entryInfo.height * 1.1) >= rootInfo.top
// )
console.log(`entry Letter:${entry.target.innerText}`,
    '\nentryInfo',entryInfo,
    '\nrootInfo',rootInfo,
)

            // For scrolling down
            if (
                entryInfo.top + entryInfo.height <= rootInfo.top &&
                entryInfo.top + Math.ceil(entryInfo.height * 1.1) >= rootInfo.top
            ) {
                if (config.stickyCB) config.stickyCB(entry.target);
            }

        
            // if (
            //     targetInfo.bottom >= rootBoundsInfo.top &&
            //     targetInfo.bottom < rootBoundsInfo.bottom
            // ) {
            //     console.log('not sticky',stickyTarget)
            // }
        }
    }, {
        // rootMargin: `-${config.itemHeight}px`,
        rootMargin: `-${config.itemHeight * 1.1}px 0px 0px 0px`,
        threshold: [0],
        root: config.container
    });

    config.items.forEach(el => observer.observe(el));

    const unobserve = () => {
        console.log('unobserve cleanup')
        return config.items.forEach(el => observer.unobserve(el));
    }

    return unobserve;
}

export default stickyHeaders;