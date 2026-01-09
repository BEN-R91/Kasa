import './index.css';

export const Button = ({label}) => {
    return <button>{label}</button>;
}

// *** Un composant React :                                                        *** Rendre le message “dynamique”

// c’est une fonction JavaScript                                                   Version avec une variable :
// son nom commence par une majuscule
// elle retourne du JSX                                                            function Message() {
// ce JSX décrit l’interface rien de plus                                            const text = "Bonjour Ben 👋";
                                                                                     
// Ex :                                                                              return <p>{text}</p>;
                                                                            //     }
// function Message() {
//  return <p>Hello</p>;                                                           Points clés :
// }                                                                               
// export default Message;                                                         * {} = on injecte du JavaScript dans le JSX
                                                                            //     * si text change → le rendu change
// *** Comment l’afficher à l’écran ?                                              * JSX ≠ HTML (c’est du JS)

// Un composant ne s’affiche jamais tout seul.                                     *** UI = f(données) ***
// Il doit être utilisé dans un autre composant.                                   
                                                                           //       * text = donnée
// EX :                                                                             * <p>{text}</p> = interface
                                                                           //       * même fonction
// Prenons le composant principal App.                                              * résultat dépend de la donnée
// src/App.jsx

//import Message from "./components/Message";

//function App() {
//  return (
//    <div>
//      <h1>Mon app React</h1>
//      <Message />
//    </div>
//  );
//}

//export default App;

// tu importes une fonction
// tu l’utilises comme une balise HTML
// React appelle la fonction
// React affiche ce qu’elle retourne
// <Message /> = appel de fonction déguisé
