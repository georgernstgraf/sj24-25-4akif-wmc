import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class PizzeriaTest
{
    @Test
    void billigVegetarisch()
    {
        Pizzeria shop;
        Pizza g, m, s, f, p, q;
        Pizza[] pizza;

        s = new Pizza("Salami",             8.5,  false);
        g = new Pizza("Gemuse",            10.9, true);
        m = new Pizza("Margherita",         9.7,  true);
        f = new Pizza("Funghi",            10.7, true);
        p = new Pizza("Prosciutto",         6.6,  false);
        q = new Pizza("Quattro Formaggi",   6.7, true);

        shop = new Pizzeria();
        pizza = shop.getPizza();

        assertEquals(null, shop.billigVegetarisch());

        pizza[0] = s;
        shop.setAnzahl(1);
        assertEquals(null, shop.billigVegetarisch());

        pizza[1] = g;
        shop.setAnzahl(2);
        assertEquals(g, shop.billigVegetarisch());

        pizza[2] = m;
        shop.setAnzahl(3);
        assertEquals(m, shop.billigVegetarisch());

        pizza[0] = f;
        shop.setAnzahl(4);
        assertEquals(m, shop.billigVegetarisch());

        pizza[0] = p;
        shop.setAnzahl(5);
        assertEquals(m, shop.billigVegetarisch());

        pizza[0] = q;
        shop.setAnzahl(6);
        assertEquals(q, shop.billigVegetarisch());
    }

    @Test
    void umdrehen0()
    {
        Pizzeria shop;
        Pizza g, m, s, f, p, q;
        Pizza[] pizza;

        s = new Pizza("Salami",             8.5,  false);
        g = new Pizza("Gemuse",            10.9, true);
        m = new Pizza("Margherita",         9.7,  true);
        f = new Pizza("Funghi",            10.7, true);
        p = new Pizza("Prosciutto",         6.6,  false);
        q = new Pizza("Quattro Formaggi",   6.7, true);

        shop = new Pizzeria();
        pizza = shop.getPizza();

        shop.umdrehen();
        assertEquals(0, shop.getAnzahl());
        assertEquals(null, pizza[0]);
        assertEquals(null, pizza[1]);
        assertEquals(null, pizza[2]);
        assertEquals(null, pizza[3]);
        assertEquals(null, pizza[4]);
        assertEquals(null, pizza[5]);
    }

    @Test
    void umdrehen1()
    {
        Pizzeria shop;
        Pizza g, m, s, f, p, q;
        Pizza[] pizza;

        s = new Pizza("Salami",             8.5,  false);
        g = new Pizza("Gemuse",            10.9, true);
        m = new Pizza("Margherita",         9.7,  true);
        f = new Pizza("Funghi",            10.7, true);
        p = new Pizza("Prosciutto",         6.6,  false);
        q = new Pizza("Quattro Formaggi",   6.7, true);

        shop = new Pizzeria();
        pizza = shop.getPizza();

        pizza[0] = s;
        shop.setAnzahl(1);

        shop.umdrehen();
        assertEquals(1, shop.getAnzahl());
        assertEquals(s, pizza[0]);
        assertEquals(null, pizza[1]);
        assertEquals(null, pizza[2]);
        assertEquals(null, pizza[3]);
        assertEquals(null, pizza[4]);
        assertEquals(null, pizza[5]);
    }

    @Test
    void umdrehen2()
    {
        Pizzeria shop;
        Pizza g, m, s, f, p, q;
        Pizza[] pizza;

        s = new Pizza("Salami",             8.5,  false);
        g = new Pizza("Gemuse",            10.9, true);
        m = new Pizza("Margherita",         9.7,  true);
        f = new Pizza("Funghi",            10.7, true);
        p = new Pizza("Prosciutto",         6.6,  false);
        q = new Pizza("Quattro Formaggi",   6.7, true);

        shop = new Pizzeria();
        pizza = shop.getPizza();

        pizza[0] = s;
        pizza[1] = g;
        shop.setAnzahl(2);

        shop.umdrehen();
        assertEquals(2, shop.getAnzahl());
        assertEquals(g, pizza[0]);
        assertEquals(s, pizza[1]);
        assertEquals(null, pizza[2]);
        assertEquals(null, pizza[3]);
        assertEquals(null, pizza[4]);
        assertEquals(null, pizza[5]);
    }

    @Test
    void umdrehen3()
    {
        Pizzeria shop;
        Pizza g, m, s, f, p, q;
        Pizza[] pizza;

        s = new Pizza("Salami",             8.5,  false);
        g = new Pizza("Gemuse",            10.9, true);
        m = new Pizza("Margherita",         9.7,  true);
        f = new Pizza("Funghi",            10.7, true);
        p = new Pizza("Prosciutto",         6.6,  false);
        q = new Pizza("Quattro Formaggi",   6.7, true);

        shop = new Pizzeria();
        pizza = shop.getPizza();

        pizza[0] = s;
        pizza[1] = g;
        pizza[2] = m;
        shop.setAnzahl(3);

        shop.umdrehen();
        assertEquals(3, shop.getAnzahl());
        assertEquals(m, pizza[0]);
        assertEquals(g, pizza[1]);
        assertEquals(s, pizza[2]);
        assertEquals(null, pizza[3]);
        assertEquals(null, pizza[4]);
        assertEquals(null, pizza[5]);
    }

    @Test
    void umdrehen4()
    {
        Pizzeria shop;
        Pizza g, m, s, f, p, q;
        Pizza[] pizza;

        s = new Pizza("Salami",             8.5,  false);
        g = new Pizza("Gemuse",            10.9, true);
        m = new Pizza("Margherita",         9.7,  true);
        f = new Pizza("Funghi",            10.7, true);
        p = new Pizza("Prosciutto",         6.6,  false);
        q = new Pizza("Quattro Formaggi",   6.7, true);

        shop = new Pizzeria();
        pizza = shop.getPizza();

        pizza[0] = s;
        pizza[1] = g;
        pizza[2] = m;
        pizza[3] = f;
        shop.setAnzahl(4);

        shop.umdrehen();
        assertEquals(4, shop.getAnzahl());
        assertEquals(f, pizza[0]);
        assertEquals(m, pizza[1]);
        assertEquals(g, pizza[2]);
        assertEquals(s, pizza[3]);
        assertEquals(null, pizza[4]);
        assertEquals(null, pizza[5]);
    }

    @Test
    void umdrehen5()
    {
        Pizzeria shop;
        Pizza g, m, s, f, p, q;
        Pizza[] pizza;

        s = new Pizza("Salami",             8.5,  false);
        g = new Pizza("Gemuse",            10.9, true);
        m = new Pizza("Margherita",         9.7,  true);
        f = new Pizza("Funghi",            10.7, true);
        p = new Pizza("Prosciutto",         6.6,  false);
        q = new Pizza("Quattro Formaggi",   6.7, true);

        shop = new Pizzeria();
        pizza = shop.getPizza();

        pizza[0] = s;
        pizza[1] = g;
        pizza[2] = m;
        pizza[3] = f;
        pizza[4] = p;
        shop.setAnzahl(5);

        shop.umdrehen();
        assertEquals(5, shop.getAnzahl());
        assertEquals(p, pizza[0]);
        assertEquals(f, pizza[1]);
        assertEquals(m, pizza[2]);
        assertEquals(g, pizza[3]);
        assertEquals(s, pizza[4]);
        assertEquals(null, pizza[5]);
    }

    @Test
    void umdrehen6()
    {
        Pizzeria shop;
        Pizza g, m, s, f, p, q;
        Pizza[] pizza;

        s = new Pizza("Salami",             8.5,  false);
        g = new Pizza("Gemuse",            10.9, true);
        m = new Pizza("Margherita",         9.7,  true);
        f = new Pizza("Funghi",            10.7, true);
        p = new Pizza("Prosciutto",         6.6,  false);
        q = new Pizza("Quattro Formaggi",   6.7, true);

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
        assertEquals(6, shop.getAnzahl());
        assertEquals(q, pizza[0]);
        assertEquals(p, pizza[1]);
        assertEquals(f, pizza[2]);
        assertEquals(m, pizza[3]);
        assertEquals(g, pizza[4]);
        assertEquals(s, pizza[5]);
    }
}