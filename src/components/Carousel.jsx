import React, { useState, useEffect, useRef } from 'react';
import '../css/carousel.css'

const nextColor = (() => {
    const colors = ['invoicer.PNG', 'fridge-note-screenshot.PNG'];
    let index = 0;
    return () => colors[index++ % colors.length]
})();

const MaybeHiddenImage = ({ src, ...props }) => <img src={src} width={300} height={300} {...props} />;


// class App extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             images: []
//         }
//         this.addImage = () => {
//             this.setState({ images: [`https://via.placeholder.com/300.png/${nextColor()}/fff`, ...this.state.images] })
//         }
//     }

//     componentDidUpdate(prevState) {
//         console.log(this.state);
//     }


//     // https://via.placeholder.com/300.png/09f/fff
//     render() {
//         return (
//             <div>
//                 <h2>Images, or something</h2>
//                 <button onClick={this.addImage}>Add an image</button>
//                 <div id="image-stack">
//                     {this.state.images.map((img, index) => {
//                         return <MaybeHiddenImage key={this.state.images.length - index} className={index == 0 ? 'coming-in' : (index == 1 ? 'going-out' : 'hidden')} src={img} />
//                     })}
//                 </div>
//             </div>
//         )
//     }
// }

const App = () => {
    const [images, setImages] = useState([]);

    const addImage = () => {
        setImages([`/static/assets/products/${nextColor()}`, ...images])
    }

    setTimeout(() => addImage(), 5000)

    const mounted = useRef();
    useEffect(() => {
        if (!mounted.current) {
            // do componentDidMount logic
            mounted.current = true;
        } else {
            // do componentDidUpdate logic
            console.log(images);
        }
    });

    return (
        <div>
            <h2>Images, or something</h2>
            <button>Add an image</button>
            <div id="image-stack">
                {images.map((img, index) => {
                    return <MaybeHiddenImage key={images.length - index} className={index == 0 ? 'coming-in' : (index == 1 ? 'going-out' : 'hidden')} src={img} />
                })}
            </div>
        </div>
    )

}



// https://via.placeholder.com/300.png/09f/fff
// render() {

// }
// }

export default App;