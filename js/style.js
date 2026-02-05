document.addEventListener("DOMContentLoaded", () => {

    const apps = [
        {
            name: "ネットバンクアプリ",
            description: "1年生後期の最終課題として作成したアプリです、pythonとmySQLを使い作成しました、データベースを使い作成するのが自分のなかで始めての事だったのでとても苦労しました、最終的に課題の必須要件を満たすためだけのものになってしまいユーザビリティはなく見た目もかなりひどいものになってしまい自分の中ではいつかちゃんとしたものを作りたいものです。",
            images: [
                "./img/bank1.png",
                "./img/bank2.png",
                "./img/bank3.png"
            ],
            currentImage: 0
        },
        {
            name: "ポケモンのようなゲーム",
            description: "1年生の時のpython授業の中間課題で作成をしました、技に合わせた音付けり、画像をつけるのに苦労しました、初めてしっかりと時間をかけて作ったアプリなので結構思い出深いです。",
            images: [
                "./img/pokemon1.png",
                "./img/pokemon2.png"
            ],
            currentImage: 0
        },
        {
            name: "闘拳",
            description: "2年生の前期で4人で作ったアプリで2D格闘オンラインゲームです。自分は主に画面のデザインを作成したりゲームの内部処理を担当しました。チームメンバーがかなり優秀だったので自分はあまり活躍しませんでしたが任された仕事はしたと思うし、チームメンバーと意思疎通を取りながら開発するのはいい経験になったと思います。",
            images: [
                "./img/touken.png",
                "./img/touken2.png"
            ],
            currentImage: 0
        }
    ];

    let currentAppIndex = 0;

    const sliderImage = document.getElementById("slider-image");
    const prevBtn = document.getElementById("prev");
    const nextBtn = document.getElementById("next");
    const appTitle = document.getElementById("app-title");
    const appDescription = document.getElementById("app-description");

    function updateSlider() {
        const app = apps[currentAppIndex];
        sliderImage.src = app.images[app.currentImage];
        appTitle.textContent = app.name;
        appDescription.textContent = app.description;
    }

    nextBtn.addEventListener("click", () => {
        currentAppIndex = (currentAppIndex + 1) % apps.length;
        const app = apps[currentAppIndex];
        app.currentImage = (app.currentImage + 1) % app.images.length;
        updateSlider();
        resetAutoSlide();
    });

    prevBtn.addEventListener("click", () => {
        currentAppIndex = (currentAppIndex - 1 + apps.length) % apps.length;
        const app = apps[currentAppIndex];
        app.currentImage = (app.currentImage + 1) % app.images.length;
        updateSlider();
        resetAutoSlide();
    });

    let autoSlide = setInterval(() => {
        currentAppIndex = (currentAppIndex + 1) % apps.length;
        const app = apps[currentAppIndex];
        app.currentImage = (app.currentImage + 1) % app.images.length;
        updateSlider();
    }, 4000);

    function resetAutoSlide() {
        clearInterval(autoSlide);
        autoSlide = setInterval(() => {
            currentAppIndex = (currentAppIndex + 1) % apps.length;
            const app = apps[currentAppIndex];
            app.currentImage = (app.currentImage + 1) % app.images.length;
            updateSlider();
        }, 4000);
    }

    updateSlider();
});
