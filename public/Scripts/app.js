(function(){
    function start()
    {
        console.log("App started...");
        let deleteButton = document.querySelectorAll('.btn-danger')
        for(button of deleteButton)
        {
            button.addEventListener('click',(event)=>{
                if(!confirm ("Are you sure"))
                {
                    event.preventDefault();
                    window.location.assign("/bookList");
                }
            });
        }
    }
    window.addEventListener("load",start);
})();