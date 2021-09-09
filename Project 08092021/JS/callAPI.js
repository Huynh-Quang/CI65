import BaseComponent from "./BaseComponent.js";

class App extends BaseComponent {
    constructor() {
        super();
        this.state = { song: [] };
    }

    async component() {
        const res = await fetch('https://api.apify.com/v2/key-value-stores/EJ3Ppyr2t73Ifit64/records/LATEST?fbclid=IwAR0q4JqjOhE9jhhFX2f5o51mDmJBeqhMkdrg6HQG1Pw-ODtow5HJSZ674j8')
            .then(res => res.json())
            .then((avatar) => { this.setState({ song: avatar.songs.top100_VN[0].songs }) });
    };

    renderAvatar = () => {
        for (let i = 0; i <= 14; i++) {
            let avatars = this.state.song;
            document.getElementById('slideshow').innerHTML = avatars[i].avatar;
            console.log(avatars[i].avatar);
        };
        return avatars;
    }

    render (

    )


}
export default App;