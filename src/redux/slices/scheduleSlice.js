import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  currentDate: null,
  items: [],
  groups: [
    {
      id: 0,
      title: 'Земляные работы',
      done: 0,
      deviation: 0,
      height: 40,
      progress: true,
      color: '#FDB1B1',
    },
    {
      id: 1,
      title: 'Шпунтовое ограждение',
      done: 0,
      deviation: 0,
      height: 40,
      progress: false,
      color: '#B2FFB4',
    },
    {
      id: 2,
      title: 'Распорная система',
      done: 0,
      deviation: 0,
      height: 40,
      progress: true,
      color: '#B3B2FE',
    },
    {
      id: 3,
      title: 'Устройство фундамента',
      done: 0,
      deviation: 0,
      height: 40,
      progress: true,
      color: '#FFFEB2',
    },
    {
      id: 4,
      title: 'Монолит',
      done: 0,
      deviation: 0,
      height: 40,
      progress: true,
      color: '#FFB2FF',
    },
    {
      id: 5,
      title: 'Кладка',
      done: 0,
      deviation: 0,
      height: 40,
      progress: false,
      color: '#8CFFFF',
    },
    {
      id: 6,
      title: 'Теплоизоляция',
      done: 0,
      deviation: 0,
      height: 40,
      progress: true,
      color: '#FEDFA5',
    },
    {
      id: 7,
      title: 'Подсистема фасада',
      done: 0,
      deviation: 0,
      height: 40,
      progress: true,
      color: '#FFB2E4',
    },
    {
      id: 8,
      title: 'Облицовка фасада',
      done: 0,
      deviation: 0,
      height: 40,
      progress: true,
      color: '#FFB2FF',
    },
    {
      id: 9,
      title: 'Остекление',
      done: 0,
      deviation: 0,
      height: 40,
      progress: true,
      color: '#B2E3FF',
    },
    {
      id: 10,
      title: 'Благоустройство',
      done: 0,
      deviation: 0,
      height: 40,
      progress: true,
      color: '#E3FFB2',
    },
    {
      id: 11,
      title: 'Работы завершены',
      done: 0,
      deviation: 0,
      height: 40,
      progress: true,
      color: '#B2FFE4',
    },
  ],
  imgsIds: ['1e3b6309-1fc9-402d-ba67-23822cfcacf1', 'fb5dcafc-e446-4d21-84ca-d09e604ec98f'],
};

export const scheduleSlice = createSlice({
  name: 'schedule',
  initialState,
  reducers: {
    addItem(state, action) {
      const indexItem = state.items.findIndex((item) => item.id === action.payload.id);
      if (indexItem !== -1) {
        state.items[indexItem] = action.payload;
      } else {
        state.items.push(action.payload);
      }

      // добавление процентов "выполнено" в поле done
      const findGroup = state.groups.find((obj) => obj.id === action.payload.id);
      if (findGroup && state.currentDate && action.payload.start_time && action.payload.end_time) {
        const { start_time, end_time } = action.payload;
        const current = state.currentDate;

        // Проверяем границы
        let donePercent;
        if (current <= start_time) {
          donePercent = 0;
        } else if (current >= end_time) {
          donePercent = 100;
        } else {
          const totalTime = end_time - start_time;
          const overTime = current - start_time;
          donePercent = (overTime / totalTime) * 100;
        }

        findGroup.done = Math.round(donePercent);
      }
    },
    addCurrentDate(state, action) {
      state.currentDate = action.payload;
    },
  },
});

export const { addItem, addCurrentDate } = scheduleSlice.actions;
export default scheduleSlice.reducer;
