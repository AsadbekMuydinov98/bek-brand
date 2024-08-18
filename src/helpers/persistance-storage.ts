// export const setItem = (key, data) => {
// 	try {
// 		localStorage.setItem(key, data)
// 	} catch (error) {
// 		console.log('Error saving data')
// 	}
// }

// export const getItem = key => {
// 	try {
// 		return localStorage.getItem(key)
// 	} catch (error) {
// 		console.log('Error getting data')
// 	}
// }

// export const removeItem = key => {
// 	try {
// 		localStorage.removeItem(key)
// 	} catch (error) {
// 		console.log('Error removing data')
// 	}
// }

export const setItem = (key: string, data: string): void => {
  try {
    localStorage.setItem(key, data);
  } catch (error) {
    if (error instanceof Error) {
      console.log('Error saving data:', error.message);
    } else {
      console.log('Unknown error saving data');
    }
  }
};

export const getItem = (key: string): string | null => {
  try {
    return localStorage.getItem(key);
  } catch (error) {
    if (error instanceof Error) {
      console.log('Error getting data:', error.message);
    } else {
      console.log('Unknown error getting data');
    }
    return null;
  }
};

export const removeItem = (key: string): void => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    if (error instanceof Error) {
      console.log('Error removing data:', error.message);
    } else {
      console.log('Unknown error removing data');
    }
  }
};
