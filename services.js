// import services from "./assets/config/services.json";

fetch("./assets/config/services.json")
    .then((response) => response.json())
    .then(services => {
        const queryString = window.location.search;
        console.log(queryString);
        const urlParams = new URLSearchParams(queryString);
        const service = urlParams.get('service')
        console.log(service);
        let selectedService = services[service];
        console.log(JSON.stringify(selectedService));

        $("#service_banner_img").attr('src', `assets/img/service_banner/${selectedService.banner}`);
        console.log(selectedService.heading);
        var template = $.parseHTML(selectedService.heading);
        $("#heading").append(template);
        $("#details").load(selectedService.details);
    }).catch(err => {
        console.log("Failed to load service:", err);
        $("#service_banner_img").attr('src', `assets/img/banner/404_not_found.jpg`);
        $("#service_banner_img").attr('class', `Error404`);
    });

