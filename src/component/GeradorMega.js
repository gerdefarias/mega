export default function gerarNum(qntNum){
    const max = 60
    const aux = []
    const v = []


    for(let i = 1; i <= qntNum; i++){
        v[i] = parseInt(Math.random() * max);

        for(let j = 0;j < i; j++){
            if(("00" + v[i]).slice(-2) !== aux[j] && v[i] !== 0){
                aux[i] = ("00" + v[i]).slice(-2)
            }else{
                i--;
                j--;
            }

        }
    }

    return(
         aux
    )
}
