import CharacterListInfoModel from "./CharacterListInfoModel"
import Character from "./CharacterModel"

export default interface CharacterListModel {
    info: CharacterListInfoModel
    results: Array<Character>
}