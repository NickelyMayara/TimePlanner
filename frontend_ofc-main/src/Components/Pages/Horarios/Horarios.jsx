import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../../Header";
import Footer from "../../Footer";

const Horarios = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const cpfData = queryParams.get("cpf");
  const dateData = queryParams.get("data");

  const [rows, setRows] = useState(() => {
    const savedRows = localStorage.getItem("rows");
    return savedRows ? JSON.parse(savedRows) : [
      { id: 1, cpf: cpfData || '', date: dateData }
    ];
  });

  const calculateTimer = (startTime, endTime) => { 
    if (!startTime || !endTime) { 
      console.error('indefinido'); 
      console.log('00:00') 
      return }

    const [startHours, startMinutes] = startTime.split(":").map(Number);
    const [endHours, endMinutes] = endTime.split(":").map(Number);

    const startInMinutes = startHours * 60 + startMinutes;
    const endInMinutes = endHours * 60 + endMinutes;

    const diffInMinutes = Math.max(0, endInMinutes - startInMinutes);
    const hours = Math.floor(diffInMinutes / 60).toString().padStart(2, "0");
    const minutes = (diffInMinutes % 60).toString().padStart(2, "0");

    return `${hours}:${minutes}`;
  };

  const addAgendamento = (cpf, date, startTime, endTime) => {
    const newId = rows.length > 0 ? Math.max(...rows.map((row) => row.id)) + 1 : 1;

    const newAgendamento = {
      id: newId,
      cpf,
      date,
      startTime,
      endTime,
      isEditing: false,
    };

    const updatedRows = [...rows, newAgendamento];
    setRows(updatedRows);

    localStorage.setItem("rows", JSON.stringify(updatedRows));
  };

  const toggleEdit = (id) => {
    setRows((prevRows) =>
      prevRows.map((row) =>
        row.id === id ? { ...row, isEditing: !row.isEditing } : row
      )
    );
  };

  const handleEdit = (id, field, value) => {
    setRows((prevRows) =>
      prevRows.map((row) =>
        row.id === id ? { ...row, [field]: value } : row
      )
    );
    localStorage.setItem("rows", JSON.stringify(rows));
  };

  const handleDelete = (id) => {
    const updatedRows = rows.filter((row) => row.id !== id);
    setRows(updatedRows);
    localStorage.setItem("rows", JSON.stringify(updatedRows));
  };

  useEffect(() => {
    if (cpfData || dateData) {
      const exists = rows.some(row => row.cpf === cpfData && row.date === dateData);

      if (!exists) {
        const newAgendamento = {
          id: rows.length + 1, // ID
          cpf: cpfData || '',
          date: dateData || "24/11/2024",
          startTime: "09:00",
          endTime: "10:00",
          isEditing: false,
        };

        const updatedRows = [...rows, newAgendamento];
        setRows(updatedRows);
        localStorage.setItem("rows", JSON.stringify(updatedRows));
      }
    }
  }, [cpfData, dateData, rows]);

  return (
    <>
      <Header
        page1="Página Inicial" to1="/paginaInicial"
        page2="Agendamento" to2="/agendamento"
      />
      <div style={styles.container}>
        <div style={styles.boxContainer}>
          <div style={styles.titleContainer}>
            <h1 style={styles.title}>DADOS DO CLIENTE</h1>
            <h1 style={styles.title}>DADOS DO ATENDIMENTO</h1>
          </div>

          <div style={styles.headerRow}>
            <span style={styles.columnHeader}>CPF</span>
            <span style={styles.columnHeader}>DATA</span>
            <span style={styles.columnHeader}>HORÁRIO INÍCIO</span>
            <span style={styles.columnHeader}>HORÁRIO TÉRMINO</span>
            <span style={styles.columnHeader}>CRONÔMETRO</span>
            <span style={styles.columnHeader}>AÇÕES</span>
          </div>

          {rows.length > 0 ? (
            rows.map((row) => (
              <div key={row.id} style={styles.dataRow}>
                <span style={styles.cell}>{row.cpf}</span>
                <span style={styles.cell}>{row.date}</span>
                {row.isEditing ? (
                  <input
                    type="text"
                    value={row.startTime}
                    style={styles.input}
                    onChange={(e) => handleEdit(row.id, "startTime", e.target.value)}
                  />
                ) : (
                  <span style={styles.cell}>{row.startTime}</span>
                )}
                {row.isEditing ? (
                  <input
                    type="text"
                    value={row.endTime}
                    style={styles.input}
                    onChange={(e) => handleEdit(row.id, "endTime", e.target.value)}
                  />
                ) : (
                  <span style={styles.cell}>{row.endTime}</span>
                )}
                <span style={styles.cell}>
                  {calculateTimer(row.startTime, row.endTime)}
                </span>
                <div style={styles.actions}>
                  <img
                    src="/edit-icon.png"
                    alt="Editar"
                    style={styles.icon}
                    onClick={() => toggleEdit(row.id)}
                  />
                  <img
                    src="/delete-icon.png"
                    alt="Deletar"
                    style={styles.icon}
                    onClick={() => handleDelete(row.id)}
                  />
                </div>
              </div>
            ))
          ) : (
            <div style={styles.noData}>Nenhum agendamento encontrado.</div>
          )}
        </div>
      </div>
      <Footer/>
    </>
  );
};

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    color: "#D4C9BE",
  },
  headerRow: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 0.5fr",
    width: "100%",
    textAlign: "center",
    padding: "10px 0",
    backgroundColor: "#130404",
    color: "#D4C9BE",
    borderBottom: "2px solid #D4C9BE",
  },
  dataRow: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 0.5fr",
    width: "100%",
    textAlign: "center",
    padding: "10px 0",
    backgroundColor: "#46121C",
    color: "#D4C9BE",
    borderBottom: "1px solid #D4C9BE",
  },
  cell: {
    padding: "5px",
  },
  input: {
    width: "90%",
    padding: "5px",
    textAlign: "center",
    borderRadius: "5px",
    border: "1px solid #D4C9BE",
    backgroundColor: "#46121C",
    color: "#D4C9BE",
  },
  columnHeader: {
    fontWeight: "bold",
    fontSize: "1rem",
  },
  titleContainer: {
    display: "flex",
    justifyContent: "space-between",
    width: "90%",
    marginBottom: "20px",
  },
  title: {
    fontSize: "1.5rem",
    fontWeight: "bold",
  },
  nav: {
    display: "flex",
    gap: "20px",
  },
  navLink: {
    color: "#D4C9BE",
    textDecoration: "none",
  },
  boxContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    width: "90%",
    marginTop: "20px",
  },
  actions: {
    display: "flex",
    justifyContent: "center",
    gap: "10",
  }
}

export default Horarios