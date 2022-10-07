/*
<!DOCTYPE html>

<html lang="pt">

    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <!-- Local de onde pega o CSS -->
        <link rel="stylesheet" href="style.css">
        <link rel="preconnect" href="https://fonts.googleapis.com">

        <!-- <link> exportado do Google Fonts -->

        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Poppins&family=Staatliches&display=swap" rel="stylesheet">

        <!-- Título da Página -->
        <title>Formulário</title>
    </head>

    <body>
        <!-- Pagina Main -->
        <div class="page">
            <!-- Título da Página -->
            <header>
                <h1>AVALIE A SUA MENTORIA</h1>
                <p>Chegou a hora de avaliar o seu mentor. Bora lá?</p>
            </header>

            <!-- Ícone do meio da Página -->
            <svg class="icon" width="225" height="100" viewBox="0 0 225 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.0406264 48.6768C0.323091 52.6711 1.51089 56.551 3.51568 60.0278C7.74087 67.3792 14.9865 72.7016 22.7903 75.8652C32.5399 79.8177 43.4081 79.9395 53.755 79.0582C63.3652 78.2396 72.8777 76.3422 82.5233 75.9511C89.9827 75.7146 97.4496 75.8911 104.889 76.4796C119.323 77.4946 133.696 79.3777 147.978 81.6606C151.845 82.2713 155.705 82.9274 159.556 83.629C159.92 83.6608 160.28 83.7271 160.632 83.8269C160.701 83.8553 160.814 83.8331 160.878 83.873C160.994 83.9456 160.408 83.6892 160.763 83.9803C161.259 84.4952 161.701 85.0585 162.082 85.6614L167.356 92.3858C168.869 94.3142 170.272 96.657 172.227 98.177C173.606 99.2319 175.268 99.8589 177.006 99.9789C178.744 100.099 180.478 99.7064 181.991 98.8511C183.571 97.8619 184.831 96.4437 185.622 94.7652C186.835 92.5608 188.282 90.4911 189.939 88.5913C196.214 81.3392 204.935 76.8786 212.229 70.7766C215.762 67.942 218.778 64.5271 221.144 60.6811C223.162 57.2007 224.418 53.3378 224.827 49.3443C225.701 41.2346 223.189 32.9642 218.964 26.0651C214.368 18.6531 207.767 12.6666 199.909 8.78589C191.081 4.33029 181.312 2.15998 171.521 1.07846C161.124 -0.0698147 150.607 -0.0662351 140.161 0.0496945C128.436 0.178987 116.733 0.689773 105.052 1.58204C93.3539 2.47903 81.7023 3.75404 70.0969 5.40707C58.9609 6.99323 47.6889 8.64646 36.7884 11.4531C27.1588 13.9324 17.5562 17.8078 10.3654 24.8296C3.97181 31.073 -0.475076 39.6166 0.0406264 48.6768Z" fill="#F67669"/>
                <path d="M53.8679 51.2566C53.3919 51.2354 52.9254 51.1167 52.4979 50.9081C52.0704 50.6995 51.6911 50.4055 51.3839 50.0446C51.0767 49.6837 50.8482 49.2637 50.7129 48.811C50.5776 48.3583 50.5383 47.8828 50.5976 47.4144L50.845 45.4846C50.8922 45.1144 50.848 44.7384 50.7162 44.389C50.5843 44.0395 50.3688 43.7269 50.0881 43.4782L48.625 42.183C48.1458 41.7589 47.796 41.2106 47.615 40.5998C47.4341 39.9891 47.4293 39.3404 47.6011 38.7271C47.773 38.1138 48.1146 37.5604 48.5874 37.1294C49.0602 36.6985 49.6452 36.4072 50.2764 36.2885L52.2053 35.9255C52.5751 35.856 52.9223 35.6985 53.2169 35.4666C53.5116 35.2346 53.745 34.9351 53.8969 34.594L54.6886 32.8128C54.9478 32.2305 55.3663 31.7317 55.8967 31.3727C56.4271 31.0136 57.0483 30.8088 57.6901 30.7812C58.3319 30.7537 58.9686 30.9045 59.5284 31.2167C60.0882 31.5288 60.5487 31.9899 60.8578 32.5478L61.8016 34.2529C61.9826 34.5803 62.2414 34.8591 62.5555 35.0653C62.8696 35.2716 63.2296 35.399 63.6044 35.4366L65.5572 35.632C66.1964 35.6961 66.8048 35.936 67.3135 36.3248C67.8222 36.7135 68.2109 37.2355 68.4358 37.8318C68.6606 38.428 68.7126 39.0747 68.5858 39.6987C68.459 40.3226 68.1584 40.899 67.7182 41.3626L66.3733 42.7791C66.1152 43.0505 65.9276 43.3801 65.8269 43.7394C65.7261 44.0988 65.7152 44.477 65.7951 44.8414L66.2101 46.7436C66.3459 47.3655 66.3033 48.0127 66.0873 48.6119C65.8713 49.2111 65.4903 49.7386 64.9875 50.1345C64.4848 50.5305 63.8802 50.7793 63.2422 50.8526C62.6042 50.926 61.9582 50.8211 61.3772 50.5498L59.6014 49.7209C59.261 49.5611 58.8863 49.4859 58.51 49.502C58.1336 49.518 57.7669 49.6247 57.4416 49.8128L55.7448 50.7917C55.1768 51.121 54.5255 51.2823 53.8679 51.2566Z" fill="white"/>
                <path d="M81.5162 50.4611C80.6403 50.4211 79.8119 50.0547 79.197 49.4353C78.8255 49.0455 78.5484 48.577 78.3866 48.0653C78.2249 47.5537 78.1827 47.0123 78.2634 46.4821L78.4904 44.7115C78.5388 44.3345 78.4939 43.9514 78.3596 43.5954C78.2253 43.2394 78.0057 42.9211 77.7196 42.6678L76.3624 41.4663C75.9621 41.1278 75.643 40.7051 75.4284 40.2291C75.2138 39.753 75.109 39.2355 75.1218 38.7143C75.1514 37.9421 75.4449 37.2029 75.9542 36.6176C76.4634 36.0323 77.1582 35.6358 77.9247 35.493L79.8312 35.1342C80.2082 35.0633 80.5621 34.9026 80.8624 34.666C81.1628 34.4293 81.4005 34.1239 81.5551 33.776L82.2656 32.1776C82.5196 31.5709 82.9377 31.0454 83.4737 30.659C84.0098 30.2725 84.6431 30.0401 85.3039 29.9873C85.9516 29.9509 86.5964 30.0974 87.1632 30.4099C87.7301 30.7224 88.1958 31.1879 88.5061 31.7523L89.4389 33.4376C89.6236 33.7712 89.8874 34.0553 90.2076 34.2653C90.5277 34.4754 90.8947 34.6052 91.2768 34.6434L93.0866 34.8246C93.6116 34.8652 94.1208 35.0215 94.5771 35.2819C95.0333 35.5423 95.4252 35.9004 95.724 36.3299C96.1575 36.9719 96.3582 37.7407 96.2933 38.5104C96.2283 39.2801 95.9016 40.0052 95.3665 40.567L94.0373 41.9671C93.7746 42.2437 93.5838 42.5795 93.4812 42.9454C93.3785 43.3113 93.3672 43.6965 93.4482 44.0677L93.8313 45.8239C93.9541 46.3308 93.9618 46.8584 93.8538 47.3686C93.7457 47.8788 93.5247 48.3589 93.2067 48.7742C92.7262 49.3844 92.0501 49.814 91.29 49.9922C90.5298 50.1703 89.731 50.0864 89.0255 49.7543L87.268 48.9339C86.9214 48.7721 86.5402 48.6961 86.1573 48.7126C85.7744 48.7291 85.4014 48.8376 85.0702 49.0286L83.3931 49.9962C82.8251 50.3254 82.1738 50.4868 81.5162 50.4611Z" fill="white"/>
                <path d="M109.236 50.345C108.76 50.3238 108.293 50.2051 107.866 49.9965C107.438 49.7879 107.059 49.4939 106.752 49.133C106.445 48.7721 106.216 48.3521 106.081 47.8994C105.946 47.4467 105.906 46.9712 105.966 46.5028L106.213 44.573C106.26 44.2028 106.216 43.8269 106.084 43.4774C105.952 43.1279 105.737 42.8153 105.456 42.5666L103.993 41.2714C103.514 40.8473 103.164 40.299 102.983 39.6883C102.802 39.0775 102.797 38.4288 102.969 37.8155C103.141 37.2022 103.483 36.6488 103.955 36.2178C104.428 35.7869 105.013 35.4956 105.644 35.3769L107.573 35.0139C107.943 34.9444 108.29 34.7869 108.585 34.555C108.88 34.323 109.113 34.0235 109.265 33.6824L110.057 31.9012C110.316 31.3189 110.734 30.8201 111.265 30.4611C111.795 30.1021 112.416 29.8972 113.058 29.8696C113.7 29.8421 114.337 29.9929 114.896 30.3051C115.456 30.6172 115.917 31.0783 116.226 31.6362L117.17 33.3413C117.351 33.6687 117.609 33.9475 117.923 34.1538C118.238 34.36 118.598 34.4874 118.973 34.5249L120.925 34.7204C121.564 34.7845 122.173 35.0244 122.682 35.4132C123.19 35.8019 123.579 36.3239 123.804 36.9202C124.029 37.5164 124.081 38.1631 123.954 38.7871C123.827 39.411 123.526 39.9874 123.086 40.451L121.741 41.8675C121.483 42.1389 121.296 42.4685 121.195 42.8278C121.094 43.1872 121.083 43.5654 121.163 43.9298L121.578 45.8319C121.714 46.4539 121.671 47.1011 121.455 47.7003C121.239 48.2995 120.858 48.8269 120.356 49.2229C119.853 49.6189 119.248 49.8676 118.61 49.941C117.972 50.0144 117.326 49.9095 116.745 49.6382L114.969 48.8093C114.629 48.6495 114.254 48.5743 113.878 48.5904C113.502 48.6064 113.135 48.7131 112.81 48.9012L111.113 49.8801C110.545 50.2094 109.894 50.3707 109.236 50.345Z" fill="white"/>
                <path opacity="0.2" d="M136.198 49.6203C135.722 49.5991 135.256 49.4804 134.828 49.2719C134.401 49.0633 134.022 48.7693 133.714 48.4084C133.407 48.0474 133.179 47.6274 133.043 47.1747C132.908 46.7221 132.869 46.2465 132.928 45.7781L133.175 43.8483C133.223 43.4782 133.178 43.1022 133.047 42.7527C132.915 42.4032 132.699 42.0907 132.419 41.8419L130.955 40.5467C130.476 40.1227 130.126 39.5743 129.945 38.9636C129.765 38.3529 129.76 37.7041 129.932 37.0909C130.103 36.4776 130.445 35.9241 130.918 35.4932C131.391 35.0622 131.976 34.7709 132.607 34.6522L134.536 34.2893C134.906 34.2198 135.253 34.0623 135.547 33.8303C135.842 33.5983 136.075 33.2989 136.227 32.9577L137.019 31.1765C137.278 30.5942 137.697 30.0954 138.227 29.7364C138.758 29.3774 139.379 29.1725 140.021 29.145C140.662 29.1174 141.299 29.2682 141.859 29.5804C142.419 29.8926 142.879 30.3537 143.188 30.9115L144.132 32.6167C144.313 32.944 144.572 33.2229 144.886 33.4291C145.2 33.6353 145.56 33.7627 145.935 33.8003L147.888 33.9957C148.527 34.0598 149.135 34.2998 149.644 34.6885C150.153 35.0773 150.541 35.5993 150.766 36.1955C150.991 36.7918 151.043 37.4384 150.916 38.0624C150.789 38.6864 150.489 39.2627 150.049 39.7263L148.704 41.1428C148.446 41.4142 148.258 41.7438 148.157 42.1032C148.057 42.4625 148.046 42.8407 148.126 43.2052L148.54 45.1073C148.676 45.7292 148.634 46.3764 148.418 46.9756C148.202 47.5749 147.821 48.1023 147.318 48.4983C146.815 48.8943 146.211 49.143 145.573 49.2164C144.935 49.2898 144.289 49.1849 143.708 48.9136L141.932 48.0846C141.591 47.9248 141.217 47.8497 140.84 47.8657C140.464 47.8817 140.097 47.9884 139.772 48.1765L138.075 49.1554C137.507 49.4847 136.856 49.646 136.198 49.6203Z" fill="black"/>
                <path opacity="0.2" d="M163.161 48.8956C162.685 48.8744 162.219 48.7558 161.791 48.5472C161.363 48.3386 160.984 48.0446 160.677 47.6837C160.37 47.3228 160.141 46.9027 160.006 46.4501C159.871 45.9974 159.831 45.5219 159.891 45.0534L160.138 43.1236C160.185 42.7535 160.141 42.3775 160.009 42.028C159.877 41.6785 159.662 41.366 159.381 41.1172L157.918 39.822C157.439 39.398 157.089 38.8496 156.908 38.2389C156.727 37.6282 156.722 36.9795 156.894 36.3662C157.066 35.7529 157.408 35.1994 157.88 34.7685C158.353 34.3375 158.938 34.0462 159.57 33.9275L161.498 33.5646C161.868 33.4951 162.215 33.3376 162.51 33.1056C162.805 32.8737 163.038 32.5742 163.19 32.233L163.982 30.4518C164.241 29.8695 164.659 29.3707 165.19 29.0117C165.72 28.6527 166.341 28.4478 166.983 28.4203C167.625 28.3927 168.262 28.5435 168.821 28.8557C169.381 29.1679 169.842 29.629 170.151 30.1868L171.095 31.892C171.276 32.2194 171.534 32.4982 171.849 32.7044C172.163 32.9106 172.523 33.038 172.898 33.0756L174.85 33.2711C175.489 33.3351 176.098 33.5751 176.607 33.9639C177.115 34.3526 177.504 34.8746 177.729 35.4709C177.954 36.0671 178.006 36.7138 177.879 37.3377C177.752 37.9617 177.451 38.5381 177.011 39.0017L175.666 40.4182C175.408 40.6896 175.221 41.0192 175.12 41.3785C175.019 41.7379 175.008 42.1161 175.088 42.4805L175.503 44.3826C175.639 45.0046 175.596 45.6517 175.38 46.251C175.164 46.8502 174.783 47.3776 174.281 47.7736C173.778 48.1696 173.173 48.4183 172.535 48.4917C171.897 48.5651 171.251 48.4602 170.67 48.1889L168.894 47.3599C168.554 47.2002 168.179 47.125 167.803 47.141C167.427 47.1571 167.06 47.2638 166.735 47.4519L165.038 48.4308C164.47 48.76 163.819 48.9214 163.161 48.8956Z" fill="black"/>
                </svg>
                
            <!-- Começo do Formulário -->
            <form id="my-form">

                <!-- Primeira Parte do Formulário -->
                <fieldset>
                    <div class="fieldset-wrapper">
                         <!-- Título do Formulário 1 -->
                        <legend class="legend1">INFORMAÇÕES PESSOAIS</legend>

                        <!-- Campo do Nome -->
                        <div class="input-wrapper">
                            <label for="event-name">Nome</label>
                            <input type="text" id="event-name">

                        <!-- Campo do Sobrenome -->
                            <label for="evento-last-name">Sobrenome</label>
                            <input type="text" id="event-last-name">
                        </div>

                        <!-- Campo do Email -->
                        <div class="input-wrapper">
                            <label for="event-email">Email<span>(digite um email válido)</span></label>
                            <input type="text" id="event-email">
                        </div>
                    </div>
                </fieldset>

                <!-- Segunda Parte do Formulário -->
                <fieldset>
                    <div class="fieldset-wrapper">
                        <!-- Título do Formulário 2 -->
                        <legend class="legend2"> INFORMAÇÕES DO MENTOR</legend>

                        <!-- Campo de Selecionar o Mentor -->
                        <div class="input-wrapper">
                            <label for="event-select">Selecione quem foi o seu mentor</span></label>
                            <select id="event-select">
                                <option value="mayk">Mayk</option>
                                <option value="brito">Brito</option>
                            </select>
                        </div>

                        <!-- Campo de texto de Feedback -->
                        <div class="input-wrapper">
                            <label for="event-feedback">Feedback sobre o mentor</span></label>
                            <textarea id="event-feedback"></textarea>
                        </div>

                        <!-- Botão do Checkbox -->
                        <div class="input-wrapper">
                            <input type="checkbox" id="event-checkbox">
                            <label for="event-check"> Todas as minhas dúvidas foram esclarecidas durante a mentoria.</label>
                        </div>
                    </div>
                </fieldset>

                <!-- Terceira Parte do Formulário -->
                <fieldset>
                    <div class="fieldset-wrapper">

                        <!-- Título do Formulário 3 -->
                        <legend class="legend2"> AGENDANDO PRÓXIMA MENTORIA</legend>
                        <!-- Campo de Data -->
                        <div class="col-3">
                            <label for="event-date"> Data <span>(DD/MM/AAAA)</span>.</label>
                            <input type="date" id="event-date">
                        </div>  

                        <!-- Campo do Horário que Começa -->
                        <div class="col-3">
                            <label for="event-begin"> Das.</label>
                            <input type="time" id="event-begin">
                        </div>

                        <!-- Campo do Horário de Término -->
                        <div class="col-3">
                            <label for="event-end"> Até </label>
                            <input type="time" id="event-end">
                        </div>
                    </div>
                </fieldset>
            </form>

            <!-- Footer Exclusivo do botão SALVAR no final da página -->
            <footer>
                <input class="button" type="submit" value="SALVAR" form="my-form">
            </footer>
        </div>
    </body>
</html>
*/