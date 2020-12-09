import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React, { useState } from 'react';

const Home = () => {


  const [newNormalProtocol, setNewNormalProtocol] = useState(0);
  const [visitorsPost, setVisitorsPost] = useState(0);
  const [interactionLevel, setInteractionLevel] = useState(0);
  const [operationalHours, setOperationalHours] = useState(0);

  const [newNormalCriteria, setNewNormalCriteria] = useState([]);
  const [visitorsPostCriteria, setVisitorsPostCriteria] = useState([]);
  const [interactionLevelCriteria, setInteractionLevelCriteria] = useState([]);
  const [operationalHoursCriteria, setOperationalHoursCriteria]= useState([]);

  const newNormalWeight = 0.318;
  const visitorsPostWeight = 0.055;
  const interactionLevelWeight = 0.634;
  const operationalHoursWeight = 0.093;

  const [normalizedNewNormal, setNormalizedNewNormal] = useState([]);
  const [normalizedVisitorsPost, setNormalizedVisitorsPost] = useState([]);
  const [normalizedInteractionLevel, setNormalizedInteractionLevel] = useState([]);
  const [normalizedOperationalHours, setNormalizedOperationalHours]= useState([]);

  const [multipliedNewNormal, setMultipliedNewNormal] = useState([]);
  const [multipliedVisitorsPost, setMultipliedVisitorsPost] = useState([]);
  const [multipliedInteractionLevel, setMultipliedInteractionLevel] = useState([]);
  const [multipliedOperationalHours, setMultipliedOperationalHours]= useState([]);

  const [riskLevels, setRiskLevels] = useState([]);
  const addData = (e) => {
    e.preventDefault();
    // Add to Array
    setNewNormalCriteria([...newNormalCriteria, newNormalProtocol]);
    setVisitorsPostCriteria([...visitorsPostCriteria, visitorsPost]);
    setInteractionLevelCriteria([...interactionLevelCriteria, interactionLevel]);
    setOperationalHoursCriteria([...operationalHoursCriteria, operationalHours]);
    // Reset Values
    setNewNormalProtocol(0);
    setVisitorsPost(0);
    setInteractionLevel(0);
    setOperationalHours(0);
  }

  const normalize = () => {
    const smallest1 = Math.min(...newNormalCriteria);
    const biggest2 = Math.max(...visitorsPostCriteria);
    const biggest3 = Math.max(...interactionLevelCriteria);
    const biggest4 = Math.max(...operationalHoursCriteria);
    let temp1Arr = [];
    let temp2Arr = [];
    let temp3Arr = [];
    let temp4Arr = [];
    newNormalCriteria.map((each) => {
      const temp = (smallest1/each).toFixed(3);
      temp1Arr.push(temp);
    })
    visitorsPostCriteria.map((each) => {
      const temp = (each/biggest2).toFixed(3);
      temp2Arr.push(temp);
    })
    interactionLevelCriteria.map((each) => {
      const temp = (each/biggest3).toFixed(3);
      temp3Arr.push(temp);
    })
    operationalHoursCriteria.map((each) => {
      const temp = (each/biggest4).toFixed(3);
      temp4Arr.push(temp);
    })
    setNormalizedNewNormal(temp1Arr);
    setNormalizedVisitorsPost(temp2Arr);
    setNormalizedInteractionLevel(temp3Arr);
    setNormalizedOperationalHours(temp4Arr);
  }

  const multiply = () => {
    let temp1Arr = [];
    let temp2Arr = [];
    let temp3Arr = [];
    let temp4Arr = [];
    
    normalizedNewNormal.map((each) => {
      temp1Arr.push((each * newNormalWeight).toFixed(3));
    })
    normalizedVisitorsPost.map((each) => {
      temp2Arr.push((each * visitorsPostWeight).toFixed(3));
    })
    normalizedInteractionLevel.map((each) => {
      temp3Arr.push((each * interactionLevelWeight).toFixed(3));
    })
    normalizedOperationalHours.map((each) => {
      temp4Arr.push((each * operationalHoursWeight).toFixed(3));
    })

    setMultipliedNewNormal(temp1Arr);
    setMultipliedVisitorsPost(temp2Arr);
    setMultipliedInteractionLevel(temp3Arr);
    setMultipliedOperationalHours(temp4Arr);
  }

  const riskLevel = () => {
    let res = [];
    for(var i = 0; i < multipliedNewNormal.length; i++) {
      var temp = parseFloat(multipliedNewNormal[i]) + parseFloat(multipliedVisitorsPost[i]) + parseFloat(multipliedInteractionLevel[i]) + parseFloat(multipliedOperationalHours[i]);
      res.push(temp.toFixed(3));
    }
    setRiskLevels(res);
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Sispak</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          SISTEM PAKAR DAN PENDUKUNG KEPUTUSAN
        </h1>
        <h3 className={styles.subtitle}>
          ANALISIS TINGKAH LAKU KELOMPOK MASYARAKAT TERHADAP PENULARAN COVID 19 BERDASARKAN STATUS MEDIA SOSIAL
        </h3>
        <p className={styles.description}>
          Oleh :
        </p>
        <ul>
        <li>Azura Sakan Taufik_00000020528</li>
        <li>CyntiaFanny_00000020976</li>
        <li>Patricia Dinda Kinanti Susilo_00000022060</li>
        <li>Samuel Lorent_00000021863</li>
        <li>Titania_00000020822</li>
        </ul>
        <form onSubmit={addData}>
          <div className={styles.grid}>
            <label className={styles.label}>Bobot New Normal Protocol</label>
            <label className={styles.label}>Bobot Visitors Post</label>
            <label className={styles.label}>Bobot Interaction Level</label>
            <label className={styles.label}>Bobot Operational Hours</label>
          </div>
          <div className={styles.grid}>
            <input
              type="number"
              name="newNormalProtocol"
              value={newNormalProtocol}
              onChange={(e) => setNewNormalProtocol(e.target.value)}
              className={styles.input}
            />
            <input
              type="number"
              name="visitorsPost"
              value={visitorsPost}
              onChange={(e) => setVisitorsPost(e.target.value)}
              className={styles.input}
            />
            <input
              type="number"
              name="interactionLevel"
              value={interactionLevel}
              onChange={(e) => setInteractionLevel(e.target.value)}
              className={styles.input}
            />
            <input
              type="number"
              name="operationalHours"
              value={operationalHours}
              onChange={(e) => setOperationalHours(e.target.value)}
              className={styles.input}
            />
            <button
              className={styles.button}
              type="submit"
            >
              Add
            </button>
          </div>
        </form>
        <div>
          <h3 className={styles.steptitle}>Input From User</h3>
          <label className={styles.subsubtitle}>New Normal Criteria Values</label>
          <p>{newNormalCriteria.toString()}</p>
          <label className={styles.subsubtitle}>Visitors Post Criteria Values</label>
          <p>{visitorsPostCriteria.toString()}</p>
          <label className={styles.subsubtitle}>Interaction Level Criteria Values</label>
          <p>{interactionLevelCriteria.toString()}</p>
          <label className={styles.subsubtitle}>Operational Hours Criteria Values</label>
          <p>{operationalHoursCriteria.toString()}</p>
          <button className={styles.button} onClick={normalize}>Normalize</button>

          <h3 className={styles.steptitle}>Normalized Input</h3>
          <label className={styles.subsubtitle}>Normalized New Normal Criteria Values</label>
          <p>{normalizedNewNormal.toString()}</p>
          <label className={styles.subsubtitle}>Normalized Visitors Post Criteria Values</label>
          <p>{normalizedVisitorsPost.toString()}</p>
          <label className={styles.subsubtitle}>Normalized Interaction Level Criteria Values</label>
          <p>{normalizedInteractionLevel.toString()}</p>
          <label className={styles.subsubtitle}>Normalized Operational Hours Criteria Values</label>
          <p>{normalizedOperationalHours.toString()}</p>
          <button className={styles.button} onClick={multiply}>Multiply</button>

          <h3 className={styles.steptitle}>Multiplied Input by Weight</h3>
          <label className={styles.subsubtitle}>Multiplied New Normal Criteria Values</label>
          <p>{multipliedNewNormal.toString()}</p>
          <label className={styles.subsubtitle}>Multiplied Visitors Post Criteria Values</label>
          <p>{multipliedVisitorsPost.toString()}</p>
          <label className={styles.subsubtitle}>Multiplied New Interaction Level Criteria Values</label>
          <p>{multipliedInteractionLevel.toString()}</p>
          <label className={styles.subsubtitle}>Multiplied Operational Hours Criteria Values</label>
          <p>{multipliedOperationalHours.toString()}</p>
          <button className={styles.button} onClick={riskLevel}>Show Risk Levels</button>

          <h3 className={styles.steptitle}>Risk Levels</h3>
          {riskLevels.toString()}
        </div>
      </main>
    </div>
  )
}

export default Home;
