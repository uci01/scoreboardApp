import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function ScoreBoard({ teamA, teamB, setTeamA, setTeamB, onReset }) {
  const updateScore = (team, setTeam, delta) => {
    setTeam((prev) => {
      const newScore = Math.max(0, prev.score + delta);
      return { ...prev, score: newScore };
    });
  };

  const checkWinner = (team) => {
    if (team.score === 10) {
      alert(`${team.name} memenangkan pertandingan!`);
    }
  };

  return (
    <View style={styles.board}>
      <Text style={styles.title}>Pertandingan Futsal</Text>

      <View style={[styles.team, styles.teamA]}>
        <Text style={styles.teamName}>{teamA.name}</Text>
        <Text style={styles.score}>{teamA.score}</Text>
        <View style={styles.buttons}>
          <TouchableOpacity 
            style={styles.button} 
            onPress={() => {
              updateScore(teamA, setTeamA, 1);
              checkWinner(teamA);
            }}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.button} 
            onPress={() => updateScore(teamA, setTeamA, -1)}>
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={[styles.team, styles.teamB]}>
        <Text style={styles.teamName}>{teamB.name}</Text>
        <Text style={styles.score}>{teamB.score}</Text>
        <View style={styles.buttons}>
          <TouchableOpacity 
            style={styles.button} 
            onPress={() => {
              updateScore(teamB, setTeamB, 1);
              checkWinner(teamB);
            }}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.button} 
            onPress={() => updateScore(teamB, setTeamB, -1)}>
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity style={styles.resetButton} onPress={onReset}>
        <Text style={styles.resetButtonText}>Reset</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  board: {
    width: '100%',
    padding: 20,
    backgroundColor: '#ffffff',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 5,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#34495e',
    textAlign: 'center',
  },
  team: {
    width: '100%',
    padding: 20,
    marginBottom: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  teamA: {
    backgroundColor: '#ff6b6b',
  },
  teamB: {
    backgroundColor: '#1dd1a1',
  },
  teamName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  score: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#fff',
    marginVertical: 10,
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%',
  },
  button: {
    backgroundColor: '#576574',
    padding: 10,
    borderRadius: 10,
    marginHorizontal: 5,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  resetButton: {
    marginTop: 20,
    backgroundColor: '#2c3e50',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  resetButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
