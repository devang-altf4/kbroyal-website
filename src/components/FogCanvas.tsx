import React, { useEffect, useRef } from 'react';

export const FogCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Create 3 atmospheric fog clouds
    const numClouds = 22;
    const clouds: Array<{
      x: number;
      y: number;
      radius: number;
      opacity: number;
      vx: number;
      vy: number;
      layer: number;
    }> = [];

    for (let i = 0; i < numClouds; i++) {
      clouds.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 300 + 200,
        opacity: Math.random() * 0.08 + 0.03,
        vx: (Math.random() - 0.5) * 0.15,
        vy: (Math.random() - 0.5) * 0.1,
        layer: Math.floor(Math.random() * 3),
      });
    }

    let mouseX = 0;
    let mouseY = 0;
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX - width / 2) * 0.01;
      mouseY = (e.clientY - height / 2) * 0.01;
    };
    window.addEventListener('mousemove', handleMouseMove);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < clouds.length; i++) {
        const c = clouds[i];

        // Slow ambient drift influenced slightly by layer speed and mouse
        c.x += c.vx + mouseX * 0.01 * (c.layer + 1);
        c.y += c.vy + mouseY * 0.01 * (c.layer + 1);

        if (c.x < -c.radius) c.x = width + c.radius;
        if (c.x > width + c.radius) c.x = -c.radius;
        if (c.y < -c.radius) c.y = height + c.radius;
        if (c.y > height + c.radius) c.y = -c.radius;

        const grad = ctx.createRadialGradient(
          c.x,
          c.y,
          0,
          c.x,
          c.y,
          c.radius
        );

        grad.addColorStop(0, `rgba(217, 215, 212, ${c.opacity})`);
        grad.addColorStop(0.5, `rgba(217, 215, 212, ${c.opacity * 0.4})`);
        grad.addColorStop(1, 'rgba(10, 8, 1, 0)');

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(c.x, c.y, c.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-75"
    />
  );
};
