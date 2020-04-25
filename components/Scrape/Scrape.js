import React, {useEffect, useContext} from 'react';

import ScrapeTable from './ScrapeTable';

import {scrapeContext} from '../Context';

import {StyleSheet, SafeAreaView, ScrollView} from 'react-native';

const ScrapeOptions = () => {
  const {scrape} = useContext(scrapeContext);
  useEffect(() => {
    // console.log(scrape);
  }, [scrape]);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {typeof scrape.results === 'undefined' ? null : (
          <ScrapeTable data={scrape.results} />
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
  },
  scrollView: {},
});

export default ScrapeOptions;