interface IArray {
    id: number
}

export const searchByIndex = (array: IArray[], id: number): IArray | undefined => {
    return array.find(obj =>  obj.id === id);
};




