var $burguerButton = document.getElementById('burguer-button');
        var $menu = document.getElementById('menu');

        var consulta = window.matchMedia('(max-width: 800px)');
        consulta.addListener(mediaQuery);

        function mediaQuery (){
            if(consulta.matches){
                console.log('se cumplio');
                $burguerButton.addEventListener('touchstart', toggleMenu);         
            }else{
                console.log('no se cumple');
                $burguerButton.removeEventListener('touchstart', toggleMenu);
            }
        }
        mediaQuery();
        function toggleMenu(){
            $menu.classList.toggle('active');
        }
        
        var blazy = new Blazy({
            selector: 'img'
        })