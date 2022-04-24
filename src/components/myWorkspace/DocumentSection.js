import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Colors from '@constants/colors';

const documents = [
  {
    name: 'Equipment Purchase.pdf',
    destination: 'Disk / Objects / Contracts ...',
  },
  {
    name: 'Equipment Purchase.pdf',
    destination: 'Disk / Objects / Contracts ...',
  },
  {
    name: 'Equipment Purchase.pdf',
    destination: 'Disk / Objects / Contracts ...',
  },
  {
    name: 'Equipment Purchase.pdf',
    destination: 'Disk / Objects / Contracts ...',
  },
  {
    name: 'Equipment Purchase.pdf',
    destination: 'Disk / Objects / Contracts ...',
  },
];

const Document = (props) => {
  return (
    <TouchableOpacity style={styles.documentCard}>
      <Icon name="file" size={24} color={Colors.progressBar} />
      <View style={styles.documentInfo}>
        <Text style={styles.documentName}>{props.name}</Text>
        <Text style={styles.documentDestination}>{props.destination}</Text>
      </View>
    </TouchableOpacity>
  );
};

const DocumentSection = () => {
  return (
    <View style={styles.documents}>
      <View style={styles.heading}>
        <Text style={styles.title}>Documents</Text>
        <TouchableOpacity style={styles.viewMoreButton}>
          <Text style={styles.viewMoreBtnText}>View more</Text>
        </TouchableOpacity>
      </View>
      {documents.map((doc, index) => (
        <Document
          key={`document-${index}`}
          name={doc.name}
          destination={doc.destination}
        />
      ))}
    </View>
  );
};

export default DocumentSection;

const styles = StyleSheet.create({
  documents: {
    marginTop: 16,
    marginBottom: 8,
    paddingHorizontal: 24,
  },
  heading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
  },
  viewMoreButton: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 32,
    backgroundColor: Colors.primaryButtonColor,
  },
  viewMoreBtnText: {
    fontSize: 16,
    color: 'white',
    fontWeight: '400',
  },
  documentCard: {
    marginTop: 8,
    paddingVertical: 16,
    paddingHorizontal: 20,
    backgroundColor: 'white',
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  documentInfo: {
    marginLeft: 16,
  },
  documentName: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  documentDestination: {
    marginTop: 8,
    fontSize: 12,
    fontWeight: '500',
    color: 'black',
    opacity: 0.5
  }
});
