export const preloadCalendly = () => {
    const scriptId = "calendly-wjs";
    if (typeof document !== "undefined" && !document.getElementById(scriptId)) {
        const script = document.createElement("script");
        script.id = scriptId;
        script.src = "https://assets.calendly.com/assets/external/widget.js";
        script.async = true;
        document.body.appendChild(script);
    }
};
