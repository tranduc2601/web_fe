import java.awt.*;
import java.awt.event.*;
import javax.swing.*;

public class ButtonFrameLambda extends JFrame{
   private JPanel buttonPanel;
   private static final int DEFAULT_WIDTH = 300;
   private static final int DEFAULT_HEIGHT = 200;

   public ButtonFrameLambda(){      
      setSize(DEFAULT_WIDTH, DEFAULT_HEIGHT);

      JButton yellowButton = new JButton("Yellow");
      JButton blueButton = new JButton("Blue");
      JButton redButton = new JButton("Red");

      buttonPanel = new