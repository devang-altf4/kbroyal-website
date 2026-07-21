import React, { useEffect, useRef } from 'react';

interface CanvasProps {
  scrollProgress: number; // 0 to 1
}

export const ScrollWorldCanvas: React.FC<CanvasProps> = ({ scrollProgress }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // 3D Warp Stars & Gold Luxury Particles
    const numParticles = 400;
    const particles: Array<{
      x: number;
      y: number;
      z: number;
      size: number;
      color: string;
      speedZ: number;
    }> = [];

    const colors = ['#ffffff', '#fff3b0', '#f7e838', '#d4af37', '#00f0ff'];

    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: (Math.random() - 0.5) * width * 3,
        y: (Math.random() - 0.5) * height * 3,
        z: Math.random() * width * 1.5,
        size: Math.random() * 2 + 0.5,
        color: colors[Math.floor(Math.random() * colors.length)],
        speedZ: Math.random() * 3 + 1.5,
      });
    }

    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = (e.clientX - width / 2) * 0.15;
      targetMouseY = (e.clientY - height / 2) * 0.15;
    };
    window.addEventListener('mousemove', handleMouseMove);

    let lastScrollProgress = scrollProgress;

    const render = () => {
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      // Calculate warp speed from scroll velocity
      const scrollSpeed = Math.abs(scrollProgress - lastScrollProgress) * 50;
      lastScrollProgress = scrollProgress;

      ctx.fillStyle = 'rgba(5, 5, 8, 0.3)';
      ctx.fillRect(0, 0, width, height);

      const fov = 400;
      const centerX = width / 2 + mouseX;
      const centerY = height / 2 + mouseY;

      const currentWarp = Math.min(25, 2 + scrollSpeed * 8);

      // Draw Warp Particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.z -= p.speedZ * currentWarp;

        if (p.z <= 1) {
          p.z = width * 1.5;
          p.x = (Math.random() - 0.5) * width * 3;
          p.y = (Math.random() - 0.5) * height * 3;
        }

        const k = fov / p.z;
        const px = p.x * k + centerX;
        const py = p.y * k + centerY;

        if (px >= 0 && px <= width && py >= 0 && py <= height) {
          const alpha = Math.min(1, (1 - p.z / (width * 1.5)) * 1.5);
          const drawSize = Math.max(0.5, p.size * k * 0.8);

          // Draw warp tail if moving fast
          if (currentWarp > 4) {
            const prevK = fov / (p.z + p.speedZ * currentWarp * 1.5);
            const prevPx = p.x * prevK + centerX;
            const prevPy = p.y * prevK + centerY;

            ctx.beginPath();
            ctx.moveTo(px, py);
            ctx.lineTo(prevPx, prevPy);
            ctx.strokeStyle = p.color;
            ctx.lineWidth = drawSize;
            ctx.globalAlpha = alpha * 0.7;
            ctx.stroke();
          } else {
            ctx.beginPath();
            ctx.arc(px, py, drawSize, 0, Math.PI * 2);
            ctx.fillStyle = p.color;
            ctx.globalAlpha = alpha;
            ctx.shadowBlur = 10;
            ctx.shadowColor = p.color;
            ctx.fill();
          }
        }
      }

      ctx.globalAlpha = 1.0;
      ctx.shadowBlur = 0;

      // Draw Perspective Grid Lines
      const time = Date.now() * 0.0008;
      ctx.strokeStyle = 'rgba(212, 175, 55, 0.035)';
      ctx.lineWidth = 0.6;
      ctx.beginPath();

      const numRays = 16;
      for (let i = 0; i < numRays; i++) {
        const angle = (i / numRays) * Math.PI * 2 + time * 0.05;
        const rx = centerX + Math.cos(angle) * width * 1.5;
        const ry = centerY + Math.sin(angle) * height * 1.5;
        ctx.moveTo(centerX, centerY);
        ctx.lineTo(rx, ry);
      }
      ctx.stroke();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [scrollProgress]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-80"
    />
  );
};
