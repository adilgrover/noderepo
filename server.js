const app =require('./app')

const PORT =  3000;
app.listen(PORT, () => {
  console.log(`Serverr is running on http://localhost:${PORT}`);
});