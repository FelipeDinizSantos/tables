import { InputMask } from "@react-input/mask";
import { useState } from "react";

export default function InformationRequestTable() {
    const [rows, setRows] = useState<I_InformationRequestTable[]>([]);

    const [formData, setFormData] = useState<I_InformationRequestTable>({
        id: "",
        date: "",
        attachment: "",
        lastUpdate: "",
        observations: "",
        orderDescription: "",
        requestType: "",
        responseDeadline: "",
        sender: "",
        internalResponsible: "",
        status: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleAddTable = () => {
        const areAllFieldsFilled = Object.values(formData).every(
            (value) => value.trim() !== ""
        );

        if (!areAllFieldsFilled) {
            alert("Por favor, preencha todos os campos antes de adicionar.");
            return;
        }

        setRows((prevRows) => [...prevRows, formData]);
        setFormData({
            id: "",
            date: "",
            attachment: "",
            lastUpdate: "",
            observations: "",
            orderDescription: "",
            requestType: "",
            responseDeadline: "",
            sender: "",
            internalResponsible: "",
            status: "",
        });
    };

    return (
        <table border={1}>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Data de Recebimento</th>
                    <th>Remetente</th>
                    <th>Tipo de Solicitação</th>
                    <th>Descrição do Pedido</th>
                    <th>Prazo de Resposta</th>
                    <th>Responsável Interno</th>
                    <th>Status</th>
                    <th>Última Atualização</th>
                    <th>Anexo</th>
                    <th>Observações</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <input
                            type="number"
                            name="id"
                            value={formData.id}
                            onChange={handleChange}
                        />
                    </td>
                    <td>
                        <InputMask
                            mask="dd/mm/yyyy"
                            replacement={{ d: /\d/, m: /\d/, y: /\d/ }}
                            type="text"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                        />
                    </td>
                    <td>
                        <input
                            type="text"
                            name="sender"
                            value={formData.sender}
                            onChange={handleChange}
                        />
                    </td>
                    <td>
                        <input
                            type="text"
                            name="requestType"
                            value={formData.requestType}
                            onChange={handleChange}
                        />
                    </td>
                    <td>
                        <input
                            type="text"
                            name="orderDescription"
                            value={formData.orderDescription}
                            onChange={handleChange}
                        />
                    </td>
                    <td>
                        <InputMask
                            mask="dd/mm/yyyy"
                            replacement={{ d: /\d/, m: /\d/, y: /\d/ }}
                            type="text"
                            name="responseDeadline"
                            value={formData.responseDeadline}
                            onChange={handleChange}
                        />
                    </td>
                    <td>
                        <input
                            type="text"
                            name="internalResponsible"
                            value={formData.internalResponsible}
                            onChange={handleChange}
                        />
                    </td>
                    <td>
                        <input
                            type="text"
                            name="status"
                            value={formData.status}
                            onChange={handleChange}
                        />
                    </td>
                    <td>
                        <InputMask
                            mask="dd/mm/yyyy"
                            replacement={{ d: /\d/, m: /\d/, y: /\d/ }}
                            type="text"
                            name="lastUpdate"
                            value={formData.lastUpdate}
                            onChange={handleChange}
                        />
                    </td>
                    <td>
                        <input
                            type="text"
                            name="attachment"
                            value={formData.attachment}
                            onChange={handleChange}
                        />
                    </td>
                    <td>
                        <input
                            type="text"
                            name="observations"
                            value={formData.observations}
                            onChange={handleChange}
                        />
                    </td>
                    <td>
                        <button onClick={handleAddTable}>Adicionar</button>
                    </td>
                </tr>
                {rows.map((row, index) => (
                    <tr key={index}>
                        <td>{row.id}</td>
                        <td>{row.date}</td>
                        <td>{row.sender}</td>
                        <td>{row.requestType}</td>
                        <td>{row.orderDescription}</td>
                        <td>{row.responseDeadline}</td>
                        <td>{row.internalResponsible}</td>
                        <td>{row.status}</td>
                        <td>{row.lastUpdate}</td>
                        <td>{row.attachment}</td>
                        <td>{row.observations}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
