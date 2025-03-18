public class Pizzeria
{
    private Pizza[] pizza;
    private int     anzahl;

    public Pizzeria()
    {
        pizza = new Pizza[6];
        anzahl = 0;
    }

    public Pizza billigVegetarisch()
    {
        return null;
    }

    public void umdrehen()
    {
    }

    public Pizza[] getPizza()
    {
        return pizza;
    }

    public void setPizza(Pizza[] pizza)
    {
        this.pizza = pizza;
    }

    public int getAnzahl()
    {
        return anzahl;
    }

    public void setAnzahl(int anzahl)
    {
        this.anzahl = anzahl;
    }

    public String toString()
    {
        String erg;

        erg = "";
        for (int i=0; i<anzahl; i++)
        {
            erg += pizza[i].toString() + "\n";
        }
        return erg;
    }
}
