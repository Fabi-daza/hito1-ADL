import express from 'express'
import authRoutes from './routes/auth'
import privateRoutes from './routes/privateRoute'


const app = express();
const PORT = 3000;

app.use(express.json());

app.use('/login', authRoutes);
app.use('/', privateRoutes);

app.get("/", (req, res) => {
    res.send("Hola mundo en vista publica")
})


app.listen(PORT, () => {
  console.log(`Server Up on PORT: http://localhost:${PORT}!`);
});