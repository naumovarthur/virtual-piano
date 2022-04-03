document.addEventListener("keydown", function(event) {
    if (event.code === "KeyA") {
        let A = new Audio("white_keys/A.mp3");
        A.play();
    } else if (event.code === "KeyS") {
        let S = new Audio("white_keys/S.mp3");
        S.play();
    } else if (event.code === "KeyD") {
        let D = new Audio("white_keys/D.mp3");
        D.play();
    } else if (event.code === "KeyF") {
        let F = new Audio("white_keys/F.mp3");
        F.play();
    } else if (event.code === "KeyG") {
        let G = new Audio("white_keys/G.mp3");
        G.play();
    } else if (event.code === "KeyH") {
        let H = new Audio("white_keys/H.mp3");
        H.play();
    } else if (event.code === "KeyJ") {
        let J = new Audio("white_keys/J.mp3");
        J.play();
    } else if (event.code === "KeyT") {
        let T = new Audio("black_keys/T.mp3");
        T.play();
    } else if (event.code === "KeyY") {
        let Y = new Audio("black_keys/Y.mp3");
        Y.play();
    } else if (event.code === "KeyU") {
        let U = new Audio("black_keys/U.mp3");
        U.play();
    } else if (event.code === "KeyW") {
        let W = new Audio("black_keys/W.mp3");
        W.play();
    } else if (event.code === "KeyE") {
        let E = new Audio("black_keys/E.mp3");
        E.play();
    } else {
        console.warn("Key is not on Piano");
    }
});
