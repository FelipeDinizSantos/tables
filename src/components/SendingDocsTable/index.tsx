import { InputMask } from "@react-input/mask";
import { useState } from "react";

export default function SendingDocsTable() {
    const [rows, setRows] = useState<I_SendingDocsTable[]>([]);

    const [formData, setFormData] = useState<I_SendingDocsTable>({
        id: "",
        date: "",
        type: "",
        recipient: "",
        subject: "",
        internalResponsible: "",
        attachment: "",
        status: "",
        observations: "",
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
            type: "",
            recipient: "",
            subject: "",
            internalResponsible: "",
            attachment: "",
            status: "",
            observations: "",
        });
    };

    return (
        <table border={1}>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Data de Emissão</th>
                    <th>Tipo do Documento</th>
                    <th>Destinatário</th>
                    <th>Assunto</th>
                    <th>Responsável Interno</th>
                    <th>Anexo</th>
                    <th>Status</th>
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
                            name="type"
                            value={formData.type}
                            onChange={handleChange}
                        />
                    </td>
                    <td>
                        <input
                            type="text"
                            name="recipient"
                            value={formData.recipient}
                            onChange={handleChange}
                        />
                    </td>
                    <td>
                        <input
                            type="text"
                            name="subject"
                            value={formData.subject}
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
                            name="attachment"
                            value={formData.attachment}
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
                        <td>{row.type}</td>
                        <td>{row.recipient}</td>
                        <td>{row.subject}</td>
                        <td>{row.internalResponsible}</td>
                        <td>{row.attachment}</td>
                        <td>{row.status}</td>
                        <td>{row.observations}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
