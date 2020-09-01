export default (mongoose) => {
  const schema = mongoose.Schema({
    name: {
      type: String,
      require: true
    },
    subject: {
      type: String,
      require: true
    },
    type: {
      type: String,
      require: true
    },
    value: {
      type: Number,
      require: true,
      min: 0,
      validate(value) {
        if(value < 0) {
          throw new Error('Valor negativo para nota nao permitido');
        }
      }
    },
    lastModified: {
      type: Date,
      default: Date.now
    }
  });

  const Grade = mongoose.model('grade', schema, 'grade');

  return Grade;
};

