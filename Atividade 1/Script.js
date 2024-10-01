let Id = 1;

function LinhaTabela(){
    const NomeT = document.getElementById("Nome").value;
    const MarcaT = document.getElementById("Marca").value;
    const SegmentoT = document.getElementById("Segmento").value;
    const ValorT = document.getElementById("Valor").value;
    const DataT = document.getElementById("Data").value;

    if (NomeT == '' || MarcaT == '' || SegmentoT == '' || ValorT == '' || DataT == '')
    {
        alert("Preencha todos as as linhas")
    }

    else
    {
        const tabela = document.getElementById("tableDados").getElementsByTagName('tbody')[0];

        const CriarLinha = tabela.insertRow();

        const CellID = CriarLinha.insertCell(0);
        const CellNome = CriarLinha.insertCell(1);
        const CellMarca = CriarLinha.insertCell(2);
        const CellSegmento = CriarLinha.insertCell(3);
        const CellValor = CriarLinha.insertCell(4);
        const CellData = CriarLinha.insertCell(5);

        CellID.innerHTML = Id;
        CellNome.innerHTML = NomeT;
        CellMarca.innerHTML = MarcaT;
        CellSegmento.innerHTML = SegmentoT;
        CellValor.innerHTML = ValorT;
        CellData.innerHTML = DataT;

        Id += 1;

        document.getElementById("Nome").value = "";
        document.getElementById("Marca").value = "";
        document.getElementById("Segmento").value = "";
        document.getElementById("Valor").value = "";
        document.getElementById("Data").value = "";
    }
}