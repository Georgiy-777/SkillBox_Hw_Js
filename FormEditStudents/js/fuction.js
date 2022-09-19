const getLinkDomains = () => {
    return Array.from(document.getElementsByTagName('a'))
        .map(link => link.href
            .replace('http://', '')
            .replace('https://', '')
            .replace('www.', '')
            .split('/')
            .shift()
        )
        .reduce((uniquDomains, domain) => {
            if (uniquDomains.includes(domain)) return domain;
            return [...uniquDomains, domain]

        }, [])
}