import "../css/main.css"; 

var reportsWidget = {
    options: {
        containerSelector: '.reports',
        template: () =>
            {
                <article className = "reports_item"> 
                    <a href = {{cover}} target = "_blank"> 
                        <img class = "reports_cover" src = {{cover}} alt = {{title}} Cover/>
                    </a> +
                    <footer class="reports_docs"> 
                        <documents>
                            <h3 class="reports_title"> 
                                <a href = {{url}} target = "_blank">{{title}}</a> 
                            </h3> 
                        </documents>
                    </footer> 
                </article> 
            // '{{/#.}}'
        
        }
    },

    init:() => {
        this.renderReports(reportData || []);
    },

    renderReports:(reports) => {
        var inst = this,
            options = inst.options;

        $(options.containerSelector).html(Mustache.render(options.template, reports));
    }
};

reportsWidget.init();