import React, { useState, useEffect } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import { TextInput, Button, Card } from 'react-native-paper';
import { collection, getDocs } from 'firebase/firestore';
import { db, bookConverter } from '../firebaseConfig';
import { Book } from '../types';

const BookList = ({ navigation }: any) => {
  const [books, setBooks] = useState<Book[]>([]);
  const [filteredBooks, setFilteredBooks] = useState<Book[]>([]);
  const [searchText, setSearchText] = useState('');
  const [filterBy, setFilterBy] = useState<'title' | 'authors' | 'isbn' | 'genre'>('title');

  // Firestore'dan kitapları çek
  const fetchBooks = async () => {
    try {
      const querySnapshot = await getDocs(
        collection(db, 'books').withConverter(bookConverter)
      );
      const booksData = querySnapshot.docs.map(doc => doc.data());
      setBooks(booksData);
      setFilteredBooks(booksData);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  // Arama ve Filtreleme İşlemi
  const handleSearch = () => {
    const lowerSearchText = searchText.toLowerCase();

    const filtered = books.filter(book => {
      let target = '';

      if (filterBy === 'authors') {
        target = book.authors.join(' ').toLowerCase();
      } else if (filterBy === 'isbn') {
        target = String(book.isbn).toLowerCase();
      } else if (filterBy === 'title' || filterBy === 'genre') {
        target = book[filterBy]?.toLowerCase() || '';
      }

      return target.includes(lowerSearchText);
    });

    setFilteredBooks(filtered);
  };

  return (
    <View style={styles.container}>
      {/* Arama ve Filtreleme Alanı */}
      <TextInput
        label="Search"
        value={searchText}
        onChangeText={setSearchText}
        style={styles.input}
      />
      <View style={styles.filterButtons}>
        <Button
          mode={filterBy === 'title' ? 'contained' : 'outlined'}
          onPress={() => setFilterBy('title')}
          style={styles.filterButton}
        >
          Title
        </Button>
        <Button
          mode={filterBy === 'authors' ? 'contained' : 'outlined'}
          onPress={() => setFilterBy('authors')}
          style={styles.filterButton}
        >
          Authors
        </Button>
        <Button
          mode={filterBy === 'isbn' ? 'contained' : 'outlined'}
          onPress={() => setFilterBy('isbn')}
          style={styles.filterButton}
        >
          ISBN
        </Button>
        <Button
          mode={filterBy === 'genre' ? 'contained' : 'outlined'}
          onPress={() => setFilterBy('genre')}
          style={styles.filterButton}
        >
          Genre
        </Button>
      </View>
      <Button mode="contained" onPress={handleSearch} style={styles.searchButton}>
        Search
      </Button>

      {/* Kitap Listesi */}
      <FlatList
        data={filteredBooks}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Card
            style={styles.card}
            onPress={() => navigation.navigate('BookDetails', { book: item })}
          >
            <Card.Title title={item.title} subtitle={`Authors: ${item.authors.join(', ')}`} />
          </Card>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    marginBottom: 10,
  },
  filterButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  filterButton: {
    flex: 1,
    marginHorizontal: 5,
  },
  searchButton: {
    marginBottom: 20,
  },
  card: {
    marginVertical: 8,
  },
});

export default BookList;
