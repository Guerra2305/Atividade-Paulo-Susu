function flor() {



    var telefone = document.getElementById("telefone").value
    if (telefone[0]!="(")
    {
        if(telefone[0]!=undefined)
        {
            document.getElementById("telefone").value="("+telefone[0];
        }
    }
    
    if (telefone[3]!=")")
    {
        if(telefone[3]!=undefined)
        {
            document.getElementById("telefone").value=telefone.slice(0,3)+")"+telefone[3]
        }
    }

    if (telefone[9]!="-")
    {
        if(telefone[9]!=undefined)
        {
            document.getElementById("telefone").value=telefone.slice(0,9)+"-"+telefone[9]
        }
    }


}
function mascara_cpf()
        { var cpf_formatado = document.getElementById("cpf").value
            if (cpf_formatado[3]!=".")
            {
                if (cpf_formatado[3]!=undefined)
                {
                    document.getElementById("cpf").value=cpf_formatado.slice(0,3)+"."+cpf_formatado[3];
                }
            }
        
            if (cpf_formatado[6]!="-")
            {
                if(cpf_formatado[6]!=undefined)
                {
                    document.getElementById("cpf").value=cpf_formatado.slice(0,6)+"-"+cpf_formatado[6]
                }
            }

        }       

        function mascara_id()
        { var id_formatado = document.getElementById("id").value
            if (id_formatado[2]!=".")
            {
                if (id_formatado[2]!=undefined)
                {
                    document.getElementById("id").value=id_formatado.slice(0,2)+"."+id_formatado[2];
                }
            }
        
            if (id_formatado[9]!="-")
            {
                if(id_formatado[9]!=undefined)
                {
                    document.getElementById("id").value=id_formatado.slice(0,9)+"-"+id_formatado[9]
                }
            }

        }       
