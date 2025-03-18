public class Pizza
{
    private String name;
    private double preis;
    private boolean vegetarisch;

    public Pizza(String name, double preis, boolean vegetarisch)
    {
        setName (name);
        setPreis (preis);
        setVegetarisch (vegetarisch);
    }

    public String getName()
    {
        return name;
    }

    public void setName(String name)
    {
        this.name = name;
    }

    public double getPreis()
    {
        return preis;
    }

    public void setPreis(double preis)
    {
        this.preis = preis;
    }

    public boolean isVegetarisch()
    {
        return vegetarisch;
    }

    public void setVegetarisch(boolean vegetarisch)
    {
        this.vegetarisch = vegetarisch;
    }

    @Override
    public String toString()
    {
        if (vegetarisch)
            return "Pizza: " + name + "   " + preis + " EUR Vegetarisch";
        else
            return "Pizza: " + name + "   " + preis + " EUR Fleisch";
    }
}
