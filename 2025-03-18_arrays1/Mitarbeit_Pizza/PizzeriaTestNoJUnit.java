import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class PizzeriaTestNoJUnit
{
    public static void billigVegetarisch()
    {
        Pizzeria shop;
        Pizza g, m, s, f, p, q;
        Pizza[] pizza;

        s = new Pizza("Salami", 8.5, false);
        g = new Pizza("Gemuse", 10.9, true);
        m = new Pizza("Margherita", 9.7, true);
        f = new Pizza("Funghi", 10.7, true);
        p = new Pizza("Prosciutto", 6.6, false);
        q = new Pizza("Quattro Formaggi", 6.7, true);

        shop = new Pizzeria();
        pizza = shop.getPizza();

        if (null == shop.billigVegetarisch())
            System.out.print("OK");
        else
            System.out.print("Fehler!!!");

        pizza[0] = s;
        shop.setAnzahl(1);
        if (null == shop.billigVegetarisch())
            System.out.print("OK");
        else
            System.out.print("Fehler!!!");

        pizza[1] = g;
        shop.setAnzahl(2);
        if (g == shop.billigVegetarisch())
            System.out.print("OK");
        else
            System.out.print("Fehler!!!");

        pizza[2] = m;
        shop.setAnzahl(3);
        if (m == shop.billigVegetarisch())
            System.out.print("OK");
        else
            System.out.print("Fehler!!!");

        pizza[0] = f;
        shop.setAnzahl(4);
        if (m == shop.billigVegetarisch())
            System.out.print("OK");
        else
            System.out.print("Fehler!!!");

        pizza[0] = p;
        shop.setAnzahl(5);
        if (m == shop.billigVegetarisch())
            System.out.print("OK");
        else
            System.out.print("Fehler!!!");

        pizza[0] = q;
        shop.setAnzahl(6);
        if (q == shop.billigVegetarisch())
            System.out.println("OK");
        else
            System.out.println("Fehler!!!");
    }

    @Test
    public static void umdrehen0()
    {
        Pizzeria shop;
        Pizza g, m, s, f, p, q;
        Pizza[] pizza;

        s = new Pizza("Salami", 8.5, false);
        g = new Pizza("Gemuse", 10.9, true);
        m = new Pizza("Margherita", 9.7, true);
        f = new Pizza("Funghi", 10.7, true);
        p = new Pizza("Prosciutto", 6.6, false);
        q = new Pizza("Quattro Formaggi", 6.7, true);

        shop = new Pizzeria();
        pizza = shop.getPizza();

        shop.umdrehen();
        if ((0 == shop.getAnzahl()) &&
                (null == pizza[0]) &&
                (null == pizza[1]) &&
                (null == pizza[2]) &&
                (null == pizza[3]) &&
                (null == pizza[4]) &&
                (null == pizza[5]))
            System.out.println("OK");
        else
            System.out.println("Fehler!!!");
    }

    @Test
    public static void umdrehen1()
    {
        Pizzeria shop;
        Pizza g, m, s, f, p, q;
        Pizza[] pizza;

        s = new Pizza("Salami", 8.5, false);
        g = new Pizza("Gemuse", 10.9, true);
        m = new Pizza("Margherita", 9.7, true);
        f = new Pizza("Funghi", 10.7, true);
        p = new Pizza("Prosciutto", 6.6, false);
        q = new Pizza("Quattro Formaggi", 6.7, true);

        shop = new Pizzeria();
        pizza = shop.getPizza();

        pizza[0] = s;
        shop.setAnzahl(1);

        shop.umdrehen();
        if ((1 == shop.getAnzahl()) &&
                (s == pizza[0]) &&
                (null == pizza[1]) &&
                (null == pizza[2]) &&
                (null == pizza[3]) &&
                (null == pizza[4]) &&
                (null == pizza[5]))
            System.out.println("OK");
        else
            System.out.println("Fehler!!!");
    }

    @Test
    public static void umdrehen2()
    {
        Pizzeria shop;
        Pizza g, m, s, f, p, q;
        Pizza[] pizza;

        s = new Pizza("Salami", 8.5, false);
        g = new Pizza("Gemuse", 10.9, true);
        m = new Pizza("Margherita", 9.7, true);
        f = new Pizza("Funghi", 10.7, true);
        p = new Pizza("Prosciutto", 6.6, false);
        q = new Pizza("Quattro Formaggi", 6.7, true);

        shop = new Pizzeria();
        pizza = shop.getPizza();

        pizza[0] = s;
        pizza[1] = g;
        shop.setAnzahl(2);

        shop.umdrehen();
        if ((2 == shop.getAnzahl()) &&
                (g == pizza[0]) &&
                (s == pizza[1]) &&
                (null == pizza[2]) &&
                (null == pizza[3]) &&
                (null == pizza[4]) &&
                (null == pizza[5]))
            System.out.println("OK");
        else
            System.out.println("Fehler!!!");
    }

    @Test
    public static void umdrehen3()
    {
        Pizzeria shop;
        Pizza g, m, s, f, p, q;
        Pizza[] pizza;

        s = new Pizza("Salami", 8.5, false);
        g = new Pizza("Gemuse", 10.9, true);
        m = new Pizza("Margherita", 9.7, true);
        f = new Pizza("Funghi", 10.7, true);
        p = new Pizza("Prosciutto", 6.6, false);
        q = new Pizza("Quattro Formaggi", 6.7, true);

        shop = new Pizzeria();
        pizza = shop.getPizza();

        pizza[0] = s;
        pizza[1] = g;
        pizza[2] = m;
        shop.setAnzahl(3);

        shop.umdrehen();
        if ((3 == shop.getAnzahl()) &&
                (m == pizza[0]) &&
                (g == pizza[1]) &&
                (s == pizza[2]) &&
                (null == pizza[3]) &&
                (null == pizza[4]) &&
                (null == pizza[5]))
            System.out.println("OK");
        else
            System.out.println("Fehler!!!");
    }

    @Test
    public static void umdrehen4()
    {
        Pizzeria shop;
        Pizza g, m, s, f, p, q;
        Pizza[] pizza;

        s = new Pizza("Salami", 8.5, false);
        g = new Pizza("Gemuse", 10.9, true);
        m = new Pizza("Margherita", 9.7, true);
        f = new Pizza("Funghi", 10.7, true);
        p = new Pizza("Prosciutto", 6.6, false);
        q = new Pizza("Quattro Formaggi", 6.7, true);

        shop = new Pizzeria();
        pizza = shop.getPizza();

        pizza[0] = s;
        pizza[1] = g;
        pizza[2] = m;
        pizza[3] = f;
        shop.setAnzahl(4);

        shop.umdrehen();
        if ((4 == shop.getAnzahl()) &&
                (f == pizza[0]) &&
                (m == pizza[1]) &&
                (g == pizza[2]) &&
                (s == pizza[3]) &&
                (null == pizza[4]) &&
                (null == pizza[5]))
            System.out.println("OK");
        else
            System.out.println("Fehler!!!");
    }

    @Test
    public static void umdrehen5()
    {
        Pizzeria shop;
        Pizza g, m, s, f, p, q;
        Pizza[] pizza;

        s = new Pizza("Salami", 8.5, false);
        g = new Pizza("Gemuse", 10.9, true);
        m = new Pizza("Margherita", 9.7, true);
        f = new Pizza("Funghi", 10.7, true);
        p = new Pizza("Prosciutto", 6.6, false);
        q = new Pizza("Quattro Formaggi", 6.7, true);

        shop = new Pizzeria();
        pizza = shop.getPizza();

        pizza[0] = s;
        pizza[1] = g;
        pizza[2] = m;
        pizza[3] = f;
        pizza[4] = p;
        shop.setAnzahl(5);

        shop.umdrehen();
        if ((5 == shop.getAnzahl()) &&
                (p == pizza[0]) &&
                (f == pizza[1]) &&
                (m == pizza[2]) &&
                (g == pizza[3]) &&
                (s == pizza[4]) &&
                (null == pizza[5]))
            System.out.println("OK");
        else
            System.out.println("Fehler!!!");
    }

    @Test
    public static void umdrehen6()
    {
        Pizzeria shop;
        Pizza g, m, s, f, p, q;
        Pizza[] pizza;

        s = new Pizza("Salami", 8.5, false);
        g = new Pizza("Gemuse", 10.9, true);
        m = new Pizza("Margherita", 9.7, true);
        f = new Pizza("Funghi", 10.7, true);
        p = new Pizza("Prosciutto", 6.6, false);
        q = new Pizza("Quattro Formaggi", 6.7, true);

        shop = new Pizzeria();
        pizza = shop.getPizza();

        pizza[0] = s;
        pizza[1] = g;
        pizza[2] = m;
        pizza[3] = f;
        pizza[4] = p;
        pizza[5] = q;
        shop.setAnzahl(6);

        shop.umdrehen();
        if ((6 == shop.getAnzahl()) &&
                (q == pizza[0]) &&
                (p == pizza[1]) &&
                (f == pizza[2]) &&
                (m == pizza[3]) &&
                (g == pizza[4]) &&
                (s == pizza[5]))
            System.out.println("OK");
        else
            System.out.println("Fehler!!!");
    }

    public static void main(String[] args)
    {
        System.out.print("billigVegetarisch: ");
        billigVegetarisch();
        System.out.print("umdehen0: ");
        umdrehen0();
        System.out.print("umdehen1: ");
        umdrehen1();
        System.out.print("umdehen2: ");
        umdrehen2();
        System.out.print("umdehen3: ");
        umdrehen3();
        System.out.print("umdehen4: ");
        umdrehen4();
        System.out.print("umdehen5: ");
        umdrehen5();
        System.out.print("umdehen6: ");
        umdrehen6();
    }
}